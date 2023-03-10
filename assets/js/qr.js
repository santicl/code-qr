const containerQr = document.getElementById('qr-container');
const form = document.getElementById('form');
const urlInput = document.getElementById('url-input');

urlInput.focus();

const QR = new QRCode(containerQr, {
    width: 200,
    height: 200
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!urlInput.value) {
        alert('ingresa la URL en el input');
        urlInput.focus();
        return
    } else {

        console.log(urlInput.value)

        QR.makeCode(urlInput.value);
        e.target.reset();
    }
})