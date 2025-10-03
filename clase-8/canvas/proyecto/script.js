const canvas = document.getElementById('firma');
const ctx = canvas.getContext('2d');

// Variables para el dibujo
let dibujando = false;

canvas.addEventListener('mousedown', () => {
  dibujando = true;
  ctx.beginPath();
});

canvas.addEventListener('mousemove', (e) => {
  if (!dibujando) return

  ctx.lineWidth = 4
  ctx.lineCap = 'round'
  ctx.strokeStyle = '#000000'

  const x = e.offsetX;
  const y = e.offsetY;

  ctx.lineTo(x, y);
  ctx.stroke();
})

canvas.addEventListener('mouseup', () => {
  dibujando = false;
  ctx.closePath();
})

document.querySelector("#guardar").addEventListener('click', () => {
  const dataURL = canvas.toDataURL('image/png');
  document.querySelector("#resultado").innerHTML = `<img src="${dataURL}" alt="Firma guardada"/>`;
})

document.querySelector("#limpiar").addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.querySelector("#resultado").innerHTML = '';
});