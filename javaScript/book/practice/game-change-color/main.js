const field = document.querySelector('#field')
let colors = ['red', 'green', 'blue'];
let rows = 3;
let cols = 3;

function randomColor(colors) {
  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  return colors[randomInteger(0, colors.length - 1)]
}

function nextElemOfArr(arr, elem) {
  if (arr.indexOf(elem) + 1 === arr.length) {
    return arr[0]
  } else {
    return arr[arr.indexOf(elem) + 1]
  }
}

function Victory(elemBackgroundColor) {
  let flag = true,
    allTd = document.querySelectorAll('td')

  allTd.forEach(td => {
    if (!(td.style.backgroundColor == elemBackgroundColor)) {
      flag = false
    }
  })
  return flag
}


for (let i = 0; i < rows; i++) {
  let tr = document.createElement('tr')
  for (let j = 0; j < cols; j++) {
    let td = document.createElement('td')
    td.style.backgroundColor = `${randomColor(colors)}`
    td.addEventListener('click', () => {
      td.style.backgroundColor = nextElemOfArr(colors, td.style.backgroundColor)
      if (Victory(td.style.backgroundColor)) {
        console.log('vin')
      }
    })
    tr.append(td)
  }
  field.append(tr)
}

