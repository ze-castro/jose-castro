// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Get references to DOM elements
  const fileInput = document.getElementById('fileInput');
  const convertBtn = document.getElementById('convertBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const result = document.getElementById('result');
  const outputFormat = document.getElementById('output');
  const imageContainer = document.getElementById('image-container');
  const fileInputLabel = document.querySelector('.file-input-label'); // Add this for drag area

  // Arrays to store loaded images and converted image URLs
  let originalImages = [];
  let convertedImageUrls = [];

  // --- Drag and Drop Support ---
  // Highlight drop area on drag over
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
      file.type.startsWith('image/')
    );
    if (files.length) {
      fileInput.files = createFileList(files); // Set files to input for consistency
      handleFiles(files);
    }
  });

  // Helper to create a FileList from array (for compatibility)
  function createFileList(files) {
    const dataTransfer = new DataTransfer();
    files.forEach(file => dataTransfer.items.add(file));
    return dataTransfer.files;
  }

  // Unified file handler for both input and drop
  function handleFiles(files) {
    if (!files.length) return;
    originalImages = [];
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
          loadedCount++;
          imageContainer.style.display = 'flex';
          imageContainer.appendChild(img.cloneNode());
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

  // Handle file input changes (when user selects images)
  fileInput.addEventListener('change', (e) => {
    handleFiles(Array.from(e.target.files));
  });

  // Handle conversion button click
  convertBtn.addEventListener('click', () => {
    if (!originalImages.length) return;

    // Show loading animation
    result.innerHTML = `<div class="loader"></div><p>Convertendo imagens...</p>`;
    downloadBtn.style.display = 'none';

    // Get selected output format and set MIME type
    const format = outputFormat.value;
    let mimeType = 'image/jpeg';
    switch (format) {
      case 'png':
        mimeType = 'image/png';
        break;
      case 'webp':
        mimeType = 'image/webp';
        break;
    }

    convertedImageUrls = [];
    let successCount = 0;
    let errorCount = 0;

    // Use setTimeout to allow the loader to render before heavy processing
    setTimeout(() => {
      // Convert each image using a canvas
      originalImages.forEach((img, idx) => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          // Get the converted image as a DataURL
          const url = canvas.toDataURL(mimeType);
          convertedImageUrls[idx] = url;
          successCount++;
        } catch (error) {
          convertedImageUrls[idx] = null;
          errorCount++;
        }
      });

      // Show result message and enable download button if successful
      if (successCount) {
        result.innerHTML = `<p>${successCount} arquivo(s) convertido(s) com sucesso!</p>`;
        downloadBtn.style.display = 'block';
      } else {
        result.innerHTML = `<p>Erro ao converter arquivos.</p>`;
        downloadBtn.style.display = 'none';
      }
    }, 100); // Short delay to show loader
  });

  // Handle download button click
  downloadBtn.addEventListener('click', async () => {
    if (!convertedImageUrls.length) return;

    const format = outputFormat.value;

    if (convertedImageUrls.length === 1) {
      // If only one image, download directly
      const url = convertedImageUrls[0];
      if (!url) return;
      const link = document.createElement('a');
      link.download = `converted.${format}`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // If multiple images, create a zip file and download
      const zip = new JSZip();
      for (let idx = 0; idx < convertedImageUrls.length; idx++) {
        const url = convertedImageUrls[idx];
        if (!url) continue;
        // Extract base64 data and add to zip
        const base64 = url.split(',')[1];
        zip.file(`converted_${idx + 1}.${format}`, base64, {base64: true});
      }
      // Generate the zip and trigger download
      const content = await zip.generateAsync({type: "blob"});
      saveAs(content, "converted_images.zip");
    }
  });
});
