let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function getRadians(degrees) {
  return (Math.PI / 180) * degrees;
}

// 1
// ctx.arc(100, 100, 50, 0, getRadians(360));
// ctx.stroke();

// 2
// ctx.arc(100, 100, 50, 0, getRadians(180));
// ctx.stroke();

// 3
// ctx.arc(100, 100, 50, 0, getRadians(180));
// ctx.stroke();

// 4
// ctx.arc(100, 100, 50, 0, getRadians(180));
// ctx.moveTo(50, 100);
// ctx.lineTo(150, 100);
// ctx.stroke();

// 5
// ctx.arc(100, 100, 50, 0, getRadians(180));
// ctx.moveTo(50, 100);
// ctx.lineTo(150, 100);
// ctx.fill();

// 6
ctx.arc(100, 100, 50, getRadians(360), getRadians(90));
ctx.fill();
