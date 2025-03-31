// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.10.111/build/pdf.worker.min.js';

// DOM elements
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');
const compressBtn = document.getElementById('compressBtn');
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');
const result = document.getElementById('result');
const originalSizeElement = document.getElementById('originalSize');
const compressedSizeElement = document.getElementById('compressedSize');
const reductionElement = document.getElementById('reduction');
const downloadBtn = document.getElementById('downloadBtn');
const imageQuality = document.getElementById('imageQuality');
const imageQualityValue = document.getElementById('imageQualityValue');
const dpiSelect = document.getElementById('dpi');
const grayscaleCheck = document.getElementById('grayscale');
const compressTextCheck = document.getElementById('compressText');
const logElement = document.getElementById('log');

// Variables to store file data
let selectedFile = null;
let compressedPDF = null;

// Update quality display value
imageQuality.addEventListener('input', () => {
  imageQualityValue.textContent = `${imageQuality.value}%`;
});

// Set up dropzone event listeners
dropzone.addEventListener('click', () => fileInput.click());

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone.classList.add('active');
});

dropzone.addEventListener('dragleave', () => {
  dropzone.classList.remove('active');
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('active');

  if (e.dataTransfer.files.length) {
    handleFileSelection(e.dataTransfer.files[0]);
  }
});

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length) {
    handleFileSelection(e.target.files[0]);
  }
});

// Handle file selection
function handleFileSelection(file) {
  if (file.type !== 'application/pdf') {
    alert('Please select a PDF file');
    return;
  }

  selectedFile = file;
  dropzone.innerHTML = `<p>Selected: ${file.name} (${formatBytes(file.size)})</p>`;
  compressBtn.disabled = false;
  result.style.display = 'none';
  logElement.style.display = 'none';
  logElement.innerHTML = '';
}

// Compress button click handler
compressBtn.addEventListener('click', async () => {
  if (!selectedFile) return;

  try {
    // Show progress and log
    progressContainer.style.display = 'block';
    logElement.style.display = 'block';
    progressBar.style.width = '0%';
    compressBtn.disabled = true;

    log('Starting compression process...');
    log(`Original file size: ${formatBytes(selectedFile.size)}`);

    // Get compression settings
    const settings = {
      imageQuality: parseInt(imageQuality.value) / 100,
      dpi: parseInt(dpiSelect.value),
      grayscale: grayscaleCheck.checked,
      compressText: compressTextCheck.checked,
    };

    log(
      `Compression settings: Quality=${settings.imageQuality * 100}%, DPI=${
        settings.dpi
      }, Grayscale=${settings.grayscale}, CompressText=${settings.compressText}`
    );

    // Read the file as a Blob (safer than ArrayBuffer for this use case)
    const fileData = await readFileAsUint8Array(selectedFile);
    updateProgress(10);
    log('PDF file loaded into memory');

    // Compress the PDF
    log('Starting advanced compression...');
    const compressedData = await compressPDF(fileData, settings);
    log('Compression completed');

    // Update UI with results
    const originalSize = selectedFile.size;
    const compressedSize = compressedData.byteLength;
    const reduction = Math.round((1 - compressedSize / originalSize) * 100);

    originalSizeElement.textContent = formatBytes(originalSize);
    compressedSizeElement.textContent = formatBytes(compressedSize);
    reductionElement.textContent = `${reduction}%`;

    log(
      `Compression results: Original=${formatBytes(originalSize)}, Compressed=${formatBytes(
        compressedSize
      )}, Reduction=${reduction}%`
    );

    // Store the compressed PDF for download
    compressedPDF = new Blob([compressedData], { type: 'application/pdf' });

    // Show results
    result.style.display = 'block';
    progressContainer.style.display = 'none';
    compressBtn.disabled = false;
  } catch (error) {
    console.error('Error compressing PDF:', error);
    log(`ERROR: ${error.message}`);
    alert('Error compressing PDF: ' + error.message);
    progressContainer.style.display = 'none';
    compressBtn.disabled = false;
  }
});

// Download button click handler
downloadBtn.addEventListener('click', () => {
  if (!compressedPDF) return;

  const url = URL.createObjectURL(compressedPDF);
  const a = document.createElement('a');
  a.href = url;
  a.download = getCompressedFileName(selectedFile.name);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// Advanced PDF compression
async function compressPDF(fileData, settings) {
  updateProgress(15);

  try {
    // Load PDF document with PDF.js for parsing and extraction
    const loadingTask = pdfjsLib.getDocument({ data: fileData });
    const pdfDocument = await loadingTask.promise;
    const numPages = pdfDocument.numPages;
    log(`PDF has ${numPages} pages`);

    // Create a new PDF document with pdf-lib
    const pdfDoc = await PDFLib.PDFDocument.create();

    // Process each page
    for (let i = 0; i < numPages; i++) {
      log(`Processing page ${i + 1}/${numPages}`);
      updateProgress(20 + Math.floor((i / numPages) * 60));

      // Get page
      const page = await pdfDocument.getPage(i + 1);
      const viewport = page.getViewport({ scale: 1.0 });

      // Calculate target DPI scale factor
      const scaleFactor = settings.dpi / 72; // PDF default is 72 DPI

      // Create canvas for rendering
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = Math.floor(viewport.width * scaleFactor);
      canvas.height = Math.floor(viewport.height * scaleFactor);

      // Set up rendering context
      const renderContext = {
        canvasContext: context,
        viewport: page.getViewport({ scale: scaleFactor }),
      };

      // Render page to canvas
      await page.render(renderContext).promise;
      log(`Rendered page ${i + 1} to canvas at ${canvas.width}x${canvas.height}`);

      // Apply image processing if needed
      if (settings.grayscale) {
        applyGrayscale(canvas, context);
        log(`Applied grayscale to page ${i + 1}`);
      }

      // Get image data with compression
      let imageData;
      if (settings.imageQuality < 0.8) {
        // Use JPEG for better compression
        imageData = canvas.toDataURL('image/jpeg', settings.imageQuality);
        log(
          `Compressed page ${i + 1} as JPEG with quality ${Math.round(
            settings.imageQuality * 100
          )}%`
        );
      } else {
        // Use PNG for better quality
        imageData = canvas.toDataURL('image/png');
        log(`Compressed page ${i + 1} as PNG`);
      }

      // Create a new page in the PDF
      const newPage = pdfDoc.addPage([viewport.width, viewport.height]);

      // Embed the image in the PDF
      let image;
      if (imageData.startsWith('data:image/jpeg')) {
        const jpgData = dataURLToBytes(imageData);
        image = await pdfDoc.embedJpg(jpgData);
      } else {
        const pngData = dataURLToBytes(imageData);
        image = await pdfDoc.embedPng(pngData);
      }

      // Draw the image on the page
      newPage.drawImage(image, {
        x: 0,
        y: 0,
        width: viewport.width,
        height: viewport.height,
      });
    }

    // Save with compression options
    log('Finalizing PDF compression...');
    updateProgress(90);

    const options = {
      useObjectStreams: true,
      addDefaultPage: false,
      objectCompressionLevel: 9, // Maximum compression
    };

    if (settings.compressText) {
      options.compress = true;
    }

    const pdfBytes = await pdfDoc.save(options);
    log('PDF compression complete');
    updateProgress(100);

    return pdfBytes;
  } catch (error) {
    log(`Error during PDF processing: ${error.message}`);
    throw error;
  }
}

// Apply grayscale to canvas
function applyGrayscale(canvas, context) {
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
    // i+3 is alpha (skipped)
  }

  context.putImageData(imageData, 0, 0);
}

// Convert data URL to bytes
function dataURLToBytes(dataURL) {
  const base64 = dataURL.split(',')[1];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// Read file as Uint8Array instead of ArrayBuffer
function readFileAsUint8Array(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const arrayBuffer = event.target.result;
        const uint8Array = new Uint8Array(arrayBuffer);
        resolve(uint8Array);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

// Log messages to the log element
function log(message) {
  const timestamp = new Date().toLocaleTimeString();
  logElement.innerHTML += `[${timestamp}] ${message}<br>`;
  logElement.scrollTop = logElement.scrollHeight;
}

// Update progress bar
function updateProgress(percent) {
  progressBar.style.width = `${percent}%`;
}

// Format bytes to human-readable size
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Generate compressed file name
function getCompressedFileName(originalName) {
  const dotIndex = originalName.lastIndexOf('.');
  if (dotIndex === -1) return originalName + '-compressed.pdf';

  const nameWithoutExt = originalName.substring(0, dotIndex);
  return nameWithoutExt + '-compressed.pdf';
}
