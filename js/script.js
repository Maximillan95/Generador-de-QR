const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    QR.makeCode(formulario.link.value);
});