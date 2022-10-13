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

    let arr1 = [],
      arr2 = [],
      matched = [],
      result = 0

    const findDividers = (number, array) => {
      while (number !== 1)
        if (number % 2 === 0) {
          number /= 2
          array.push(2)
        } else if (number % 3 === 0) {
          number /= 3
          array.push(3)
        } else if (number % 4 === 0) {
          number /= 4
          array.push(4)
        } else if (number % 5 === 0) {
          number /= 5
          array.push(5)
        } else if (number % 6 === 0) {
          number /= 6
          array.push(6)
        } else if (number % 7 === 0) {
          number /= 7
          array.push(7)
        } else if (number % 8 === 0) {
          number /= 8
          array.push(8)
        } else if (number % 9 === 0) {
          number /= 9
          array.push(9)
        } else if (number % 10 === 0) {
          number /= 10
          array.push(10)
        } else if (number % 11 === 0) {
          number /= 11
          array.push(11)
        } else if (number % 12 === 0) {
          number /= 12
          array.push(12)
        } else if (number % 13 === 0) {
          number /= 13
          array.push(13)
        } else {
          array.push(number)
          number /= number
        }
    }

    findDividers(num1, arr1)
    findDividers(num2, arr2)

    console.log(arr1)
    console.log(arr2)

    if (arr1.length >= arr2.length) {
      let i = 0, j = 0
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
          matched.push(arr1[i])
          i++
          j++
        } else {
          i++
        }
      }
    } else if (arr1.length < arr2.length) {
      let i = 0, j = 0
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
          matched.push(arr1[i])
          i++
          j++
        } else {
          j++
        }
      }
    }



    matched.forEach((item, i) => {
      if (i === 0) {
        result = result + item
      } else {
        result = result * item
      }
    })

    const li = document.createElement('li')
    li.textContent = result
    ol.append(li)

    console.log(matched)
  })
}

dividers()