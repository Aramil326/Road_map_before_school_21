let texts = ['1.png', '2.png', '3.png']
const img = document.querySelector('img')

let timerId = setInterval(slider, 3000);
let i = 0

function slider() {
  img.src = texts[i];
  img.alt = texts[i];
  if (i === 2) {
    i = 0
  } else {
    i++
  }
}



const left = document.createElement('a')
left.href = ''
left.textContent = '←'
left.id = 'left'
left.addEventListener('click', function (e) {
  e.preventDefault()
  i--
  if (i < 0) {
    i = texts.length - 1
    img.src = texts[i];
    img.alt = texts[i];
  } else {
    img.src = texts[i];
    img.alt = texts[i];
  }
});
document.body.append(left)

const right = document.createElement('a')
right.href = ''
right.textContent = '→'
right.id = 'right'
right.addEventListener('click', function (e) {
  e.preventDefault()
  i++
  if (i > 2) {
    i = 0
    img.src = texts[i];
    img.alt = texts[i];
  } else {
    img.src = texts[i];
    img.alt = texts[i];
  }
  img.src = texts[i];
  img.alt = texts[i];
});
document.body.append(right)


























// let texts = ['1.png', '2.png', '3.png']
// const left = document.querySelector('#left'),
//   right = document.querySelector('#right'),
//   sliderBox = document.querySelector('#slider')

// let i = 0; // внешняя переменная

// left.addEventListener('click', function (e) {
//   e.preventDefault()
//   i--
//   if (i < 0) {
//     i = texts.length - 1
//     img.src = texts[i];
//   } else {
//     img.src = texts[i];
//   }

// });
// right.addEventListener('click', function (e) {
//   e.preventDefault()
//   i++
//   if (i > 2) {
//     i = 0
//     img.src = texts[i];
//   } else {
//     img.src = texts[i];
//   }
//   img.src = texts[i];
// });