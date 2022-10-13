let images = document.querySelectorAll('img'),
  counter = 0
const sliderBox = document.querySelector('#slider')

images.forEach(image => {
  image.style.display = 'none'
  image.alt = image.src
})

setInterval(slider, 1000);

function slider() {
  if (counter === images.length - 1) {
    counter = 0
    images[counter].style.display = 'block'
    images[images.length - 1].style.display = 'none'
    return
  } else {
    counter++
    images[counter].style.display = 'block'
    images[counter - 1].style.display = 'none'
  }
}