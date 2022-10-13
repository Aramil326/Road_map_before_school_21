let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// 1
// ctx.strokeRect(50, 50, 100, 100);

// 2
// ctx.fillRect(50, 50, 100, 100);

// 3
// ctx.rect(25, 25, 125, 100);
// ctx.stroke();

// 4
// ctx.rect(25, 25, 125, 100);
// ctx.fill();

// 5
ctx.fillRect(50, 50, 100, 100);
ctx.clearRect(65, 65, 50, 50);
