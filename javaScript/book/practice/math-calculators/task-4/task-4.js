"use strict"

const dividers = () => {
  const input1 = document.querySelector('#input1'),
    input2 = document.querySelector('#input2'),
    btn = document.querySelector('#btn'),
    div = document.createElement('div'),
    ol = document.createElement('ol')
  let num1, num2

  div.append(ol)
  document.body.append(div)

  btn.addEventListener('click', () => {
    while (ol.firstChild) {
      ol.removeChild(ol.firstChild)
    }
    num1 = +input1.value
    num2 = +input2.value

    const numCheck = (array, divider) => {
      if (array.length > 0 && array.indexOf(divider) === -1) {
        array.push(divider)
      } else if (array.length === 0) {
        array.push(divider)
      }
    }

    let arr1 = [],
      arr2 = []

    const findDividers = (number, array) => {
      while (number !== 1)
        if (number % 2 === 0) {
          number /= 2
          numCheck(array, 2)
        } else if (number % 3 === 0) {
          number /= 3
          numCheck(array, 3)
        } else if (number % 4 === 0) {
          number /= 4
          numCheck(array, 4)
        } else if (number % 5 === 0) {
          number /= 5
          numCheck(array, 5)
        } else if (number % 6 === 0) {
          number /= 6
          numCheck(array, 6)
        } else if (number % 7 === 0) {
          number /= 7
          numCheck(array, 7)
        } else if (number % 8 === 0) {
          number /= 8
          numCheck(array, 8)
        } else if (number % 9 === 0) {
          number /= 9
          numCheck(array, 9)
        } else {
          array.push(number)
          number /= number
        }
    }

    findDividers(num1, arr1)
    findDividers(num2, arr2)

    console.log(arr1)
    console.log(arr2)

    let matched = arr1.filter(el => arr2.indexOf(el) > -1);

    if (matched.length === 0) {
      if (num1 > num2) {
        const li = document.createElement('li')
        li.textContent = num2
        ol.append(li)
      } else if (num1 <= num2) {
        const li = document.createElement('li')
        li.textContent = num1
        ol.append(li)
      }
    } else {
      matched.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        ol.append(li)
      })
    }
  })
}

dividers()