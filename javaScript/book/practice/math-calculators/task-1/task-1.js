"use strict"

const squareRoots = () => {
  const container = document.querySelector('.container'),
    answer1 = document.querySelector('#answer1'),
    answer2 = document.querySelector('#answer2')

  let a, b, c, discriminant

  container.addEventListener('change', (e) => {
    if (e.target.getAttribute('id') === 'a') {
      a = +e.target.value
    } else if (e.target.getAttribute('id') === 'b') {
      b = +e.target.value
    } else if (e.target.getAttribute('id') === 'c') {
      c = +e.target.value
    }

    discriminant = b * b - 4 * a * c

    if (isNaN(discriminant)) {
      answer1.textContent = 'Error'
    } else if (discriminant < 0) {
      answer1.textContent = 'No roots'
    } else if (discriminant === 0) {
      answer1.textContent = 'x1 = ' + (-b / (2 * a))
    } else if (discriminant > 0) {
      answer1.textContent = 'x1 = ' + (-b - Math.sqrt(discriminant) / (2 * a))
      answer2.textContent = 'x1 = ' + (-b + Math.sqrt(discriminant) / (2 * a))
    }
  })
}
squareRoots();