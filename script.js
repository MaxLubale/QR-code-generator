const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const port = 5500;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function generateQRCode() {
    let website = document.getElementById("website").value;
    if (website) {
        try {
            let qrcodeContainer = document.getElementById("qrcode");
            qrcodeContainer.innerHTML = "";
            new QRCode(qrcodeContainer, website);
            document.getElementById("qrcode-container").style.display = "block";
        } catch (error) {
            console.error("Error generating QR code:", error);
            alert("Error generating QR code. Please try again.");
        }
    } else {
        alert("Please enter a valid URL");
    }
}