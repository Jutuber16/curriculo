document.getElementysByTagName("h1")
[0].style.fontSize="6vw";
// Contact information to encode in QR code
const contactInfo = `
BEGIN:VCARD
VERSION:3.0
N:Cunha;Juliano Gustavo dos Reis
FN:Juliano Gustavo dos Reis Cunha
ADR:;;Avenida Ana Moura, 5734;Timóteo;;MG;Brasil
EMAIL:ju779933@gmail.com
END:VCARD
`;

// Generate QR Code when the page loads
document.addEventListener('DOMContentLoaded', function() {
    new QRCode(document.getElementById("qrcode"), {
        text: contactInfo,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});
