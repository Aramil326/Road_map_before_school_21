let texts = ['text1', 'text2', 'text3'], counter = 0
const sliderBox = document.querySelector('#slider')

setInterval(slider, 1000);

function slider() {
  sliderBox.textContent = texts[counter];
  if (counter === 2) {
    counter = 0
  } else {
    counter++
  }
}