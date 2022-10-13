let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

for (let i = 1; i <= 10; i++) {
  ctx.moveTo(50, 50 + i * 10);
  ctx.lineTo(160, 50 + i * 10);
}

for (let i = 1; i <= 10; i++) {
  ctx.moveTo(50 + i * 10, 50);
  ctx.lineTo(50 + i * 10, 160);
}

ctx.stroke();