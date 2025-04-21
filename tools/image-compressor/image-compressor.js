document.addEventListener('DOMContentLoaded', () => {
  // Elementos da interface
  const fileInput = document.getElementById('fileInput');
  const convertBtn = document.getElementById('convertBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const result = document.getElementById('result');
  const imageContainer = document.getElementById('image-container');
  const fileInputLabel = document.querySelector('.file-input-label');
  const qualityInput = document.getElementById('quality');
  const qualityValue = document.getElementById('qualityValue');

  let originalImages = [];
  let convertedImageUrls = [];
  let originalFileTypes = [];
  let originalFileNames = [];

  // Formatos permitidos conforme o accept do input
  const allowedMimeTypes = [
    'image/png',
    'image/jpeg',
    'image/webp'
  ];

  // Atualiza o valor da qualidade na interface
  qualityInput.addEventListener('input', () => {
    qualityValue.textContent = `${qualityInput.value}%`;
  });

  // Drag and drop suporte visual
  fileInputLabel.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileInputLabel.classList.add('dragover');
  });
  fileInputLabel.addEventListener('dragleave', (e) => {
    e.preventDefault();
    fileInputLabel.classList.remove('dragover');
  });
  fileInputLabel.addEventListener('drop', (e) => {
    e.preventDefault();
    fileInputLabel.classList.remove('dragover');
    const files = Array.from(e.dataTransfer.files).filter(file =>
      allowedMimeTypes.includes(file.type)
    );
    if (files.length) {
      fileInput.files = createFileList(files);
      handleFiles(files);
    }
  });

  // Helper para criar FileList a partir de array
  function createFileList(files) {
    const dataTransfer = new DataTransfer();
    files.forEach(file => dataTransfer.items.add(file));
    return dataTransfer.files;
  }

  // Lida com seleção de arquivos (input ou drop)
  function handleFiles(files) {
    if (!files.length) return;
    originalImages = [];
    originalFileTypes = [];
    originalFileNames = [];
    imageContainer.innerHTML = '';
    convertBtn.disabled = true;
    convertedImageUrls = [];
    result.innerHTML = '';
    downloadBtn.style.display = 'none';

    let loadedCount = 0;
    files.forEach((file, idx) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          originalImages[idx] = img;
          originalFileTypes[idx] = file.type;
          originalFileNames[idx] = file.name;
          loadedCount++;
          // Mostra preview das imagens
          const thumb = img.cloneNode();
          imageContainer.appendChild(thumb);
          if (loadedCount === files.length) {
            imageContainer.style.display = 'flex';
            convertBtn.disabled = false;
          }
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // Input de arquivos tradicional
  fileInput.addEventListener('change', (e) => {
    handleFiles(Array.from(e.target.files));
  });

  // Clique no botão de compressão
  convertBtn.addEventListener('click', () => {
    if (!originalImages.length) return;

    // Mostra animação de carregamento
    result.innerHTML = `<div class="loader"></div><p>Comprimindo imagens...</p>`;
    downloadBtn.style.display = 'none';

    // Define qualidade (0.01 a 1)
    const quality = Math.max(0.01, Math.min(1, qualityInput.value / 100));

    convertedImageUrls = [];
    let successCount = 0;
    let errorCount = 0;

    setTimeout(() => {
      originalImages.forEach((img, idx) => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          // Sempre retorna o mesmo formato do arquivo original
          let mimeType = originalFileTypes[idx];
          let ext = 'jpg';
          if (mimeType === 'image/png') ext = 'png';
          else if (mimeType === 'image/webp') ext = 'webp';
          else if (mimeType === 'image/jpeg') ext = 'jpg';

          // Para JPEG e WEBP, aplica compressão; para PNG, ignora quality
          let url;
          if (mimeType === 'image/jpeg' || mimeType === 'image/webp') {
            url = canvas.toDataURL(mimeType, quality);
          } else if (mimeType === 'image/png') {
            url = canvas.toDataURL(mimeType);
          } else {
            // fallback para jpeg se algo inesperado acontecer
            url = canvas.toDataURL('image/jpeg', quality);
            ext = 'jpg';
          }
          convertedImageUrls[idx] = { url, ext };
          successCount++;
        } catch (error) {
          convertedImageUrls[idx] = null;
          errorCount++;
        }
      });

      // Mostra resultado e botão de download
      if (successCount) {
        result.innerHTML = `<p>${successCount} imagem(ns) comprimida(s) com sucesso!</p>`;
        downloadBtn.style.display = 'block';
      } else {
        result.innerHTML = `<p>Erro ao comprimir imagens.</p>`;
        downloadBtn.style.display = 'none';
      }
    }, 100);
  });

  // Download das imagens comprimidas (zip se múltiplas)
  downloadBtn.addEventListener('click', async () => {
    if (!convertedImageUrls.length) return;

    if (convertedImageUrls.length === 1) {
      // Download direto
      const obj = convertedImageUrls[0];
      if (!obj || !obj.url) return;
      const link = document.createElement('a');
      // Usa o nome original, mas com sufixo
      const baseName = originalFileNames[0] ? originalFileNames[0].replace(/\.[^/.]+$/, "") : "compressed";
      link.download = `${baseName}_comprimida.${obj.ext}`;
      link.href = obj.url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Download em zip
      if (typeof JSZip === 'undefined' || typeof saveAs === 'undefined') {
        alert('Para baixar múltiplas imagens, JSZip e FileSaver.js precisam estar carregados.');
        return;
      }
      const zip = new JSZip();
      for (let idx = 0; idx < convertedImageUrls.length; idx++) {
        const obj = convertedImageUrls[idx];
        if (!obj || !obj.url) continue;
        const baseName = originalFileNames[idx] ? originalFileNames[idx].replace(/\.[^/.]+$/, "") : `comprimida_${idx + 1}`;
        const base64 = obj.url.split(',')[1];
        zip.file(`${baseName}_comprimida.${obj.ext}`, base64, {base64: true});
      }
      const content = await zip.generateAsync({type: "blob"});
      saveAs(content, "imagens_comprimidas.zip");
    }
  });
});
