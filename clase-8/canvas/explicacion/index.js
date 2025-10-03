const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

// Rectangulo
ctx.fillStyle = '#FF0000'; // Color rojo
ctx.fillRect(10, 10, 150, 100); // x, y, width, height

ctx.strokeStyle = '#0000FF'; // Color azul
ctx.lineWidth = 5; // Grosor de la línea
ctx.strokeRect(200, 10, 150, 100); // x, y, width, height

// Circulo
ctx.beginPath();
ctx.arc(100, 200, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = '#00FF00'; // Color verde
ctx.fill();
ctx.strokeStyle = '#000000'; // Color

// Texto
ctx.font = '30px sans-serif';
ctx.fillStyle = '#000000'; // Color
ctx.fillText('Hola, Canvas!', 10, 300); // Texto, x, y