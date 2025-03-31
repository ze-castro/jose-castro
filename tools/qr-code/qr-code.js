let qrCodeDataUrl = null;

function generateQR() {
  const link = document.getElementById('linkInput').value.trim();
  if (!link) {
    alert('Introduza um link ou texto para gerar o código QR.');
    return;
  }

  // Clear previous QR code
  document.getElementById('qrCanvas').innerHTML = '';

  // Generate QR code
  QRCode.toCanvas(link, { width: 200 }, function (error, canvas) {
    if (error) {
      console.error(error);
      return;
    }
    document.getElementById('qrCanvas').appendChild(canvas);

    // Get the data URL for downloading
    qrCodeDataUrl = canvas.toDataURL('image/png');
    document.getElementById('downloadBtn').style.display = 'block';
  });
}

function downloadQR() {
  if (!qrCodeDataUrl) return;

  // Create a temporary link element to trigger download
  const link = document.createElement('a');
  link.href = qrCodeDataUrl;
  link.download = 'qrcode.png'; // Filename for the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
