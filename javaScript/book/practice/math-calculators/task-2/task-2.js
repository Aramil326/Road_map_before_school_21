"use strict"

const squareRoots = () => {
  const container = document.querySelector('.container'),
    answer = document.querySelector('#answer')

  let a, b, c, arr = []

  container.addEventListener('change', (e) => {
    if (e.target.getAttribute('id') === 'a') {
      a = +e.target.value
    } else if (e.target.getAttribute('id') === 'b') {
      b = +e.target.value
    } else if (e.target.getAttribute('id') === 'c') {
      c = +e.target.value
    }

    if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
      let max = Math.max(a, b, c), sum = 0
      arr = [a, b, c]

      arr.forEach((item, i) => {
        if (item === Math.max(a, b, c)) {
          arr.splice(i, 1)
        }
      })

      arr.forEach(item => {
        sum += item * item
      })

      if (max * max === sum) {
        answer.textContent = 'Yes'
      } else {
        answer.textContent = 'No'
      }
    }
  })
}
squareRoots();