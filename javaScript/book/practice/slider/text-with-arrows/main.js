let texts = ['text1', 'text2', 'text3']
const left = document.querySelector('#left'),
  right = document.querySelector('#right'),
  sliderBox = document.querySelector('#slider')

let i = 0; // внешняя переменная

left.addEventListener('click', function (e) {
  e.preventDefault()
  i--
  if (i < 0) {
    i = texts.length - 1
    sliderBox.textContent = texts[i];
  } else {
    sliderBox.textContent = texts[i];
  }

});
right.addEventListener('click', function (e) {
  e.preventDefault()
  i++
  if (i > 2) {
    i = 0
    sliderBox.textContent = texts[i];
  } else {
    sliderBox.textContent = texts[i];
  }
  sliderBox.textContent = texts[i];
});
