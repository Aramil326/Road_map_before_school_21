let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// 1
// ctx.moveTo(50, 50)
// ctx.lineTo(150, 50)
// ctx.strokeStyle = 'red';
// ctx.stroke();

// 2
// ctx.beginPath()
// ctx.moveTo(50, 50)
// ctx.lineTo(150, 50)
// ctx.strokeStyle = 'red';
// ctx.stroke();

// ctx.beginPath()
// ctx.moveTo(50, 60)
// ctx.lineTo(150, 60)
// ctx.strokeStyle = 'green';
// ctx.stroke();

// 3
// ctx.rect(50, 50, 100, 100);
// ctx.fillStyle = 'green';
// ctx.fill();

// 4
ctx.beginPath()
ctx.rect(75, 25, 50, 50);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath()
ctx.rect(75, 100, 50, 50);
ctx.fillStyle = 'red';
ctx.fill();