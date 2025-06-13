document.getElementysByTagName("h3")
[0].style.fontSize="6vw";
document.addEventListener('DOMContentLoaded', function() {
    // Cria uma URL com os dados de contato como parâmetros
    const contactData = {
        name: "Juliano Gustavo dos Reis Cunha",
        address: "Avenida Ana Moura, 5734, Timóteo, MG",
        email: "ju779933@gmail.com"
    };
    
    const url = `https://example.com/contact.html?` + 
               `name=${encodeURIComponent(contactData.name)}&` +
               `address=${encodeURIComponent(contactData.address)}&` +
               `email=${encodeURIComponent(contactData.email)}`;
    
    // Gera o QR code pequeno (100x100px)
    new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.Q
    });
});
