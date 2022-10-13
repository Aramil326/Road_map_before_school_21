"use strict"

const dividers = () => {
  const input = document.querySelector('#input'),
    btn = document.querySelector('#btn'),
    div = document.createElement('div'),
    ol = document.createElement('ol')
  let num

  div.append(ol)
  document.body.append(div)

  btn.addEventListener('click', () => {
    while (ol.firstChild) {
      ol.removeChild(ol.firstChild)
    }
    num = +input.value

    const numCheck = (array, divider) => {
      if (array.length > 0 && array.indexOf(divider) === -1) {
        array.push(divider)
      } else if (array.length === 0) {
        array.push(divider)
      }
    }

    while (!Number.isInteger(num)) {
      alert('Please enter a number')
      num = +input.value
    }

    let arr = []

    while (num !== 1)
      if (num % 2 === 0) {
        num /= 2
        numCheck(arr, 2)
      } else if (num % 3 === 0) {
        num /= 3
        numCheck(arr, 3)
      } else if (num % 4 === 0) {
        num /= 4
        numCheck(arr, 4)
      } else if (num % 5 === 0) {
        num /= 5
        numCheck(arr, 5)
      } else if (num % 6 === 0) {
        num /= 6
        numCheck(arr, 6)
      } else if (num % 7 === 0) {
        num /= 7
        numCheck(arr, 7)
      } else if (num % 8 === 0) {
        num /= 8
        numCheck(arr, 8)
      } else if (num % 9 === 0) {
        num /= 9
        numCheck(arr, 9)
      } else {
        arr.push(num)
        num /= num
      }

    console.log(arr)

    arr.forEach(item => {
      const li = document.createElement('li')
      li.textContent = item
      ol.append(li)
    })
  })
}

dividers()