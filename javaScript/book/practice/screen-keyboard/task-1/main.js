const keySymbols = [
  [
    { key: 'esc', width: '45', height: '21', pressed: false },
    { key: 'f1', width: '45', height: '21', pressed: false },
    { key: 'f2', width: '45', height: '21', pressed: false },
    { key: 'f3', width: '45', height: '21', pressed: false },
    { key: 'f4', width: '45', height: '21', pressed: false },
    { key: 'f5', width: '45', height: '21', pressed: false },
    { key: 'f6', width: '45', height: '21', pressed: false },
    { key: 'f7', width: '45', height: '21', pressed: false },
    { key: 'f8', width: '45', height: '21', pressed: false },
    { key: 'f9', width: '45', height: '21', pressed: false },
    { key: 'f10', width: '45', height: '21', pressed: false },
    { key: 'f11', width: '45', height: '21', pressed: false },
    { key: 'f12', width: '45', height: '21', pressed: false },
    { key: 'prt sc', width: '45', height: '21', pressed: false },
    { key: 'ctrl+p', width: '45', height: '21', pressed: false },
    { key: 'scr lk', width: '45', height: '21', pressed: false },
    { key: 'pause', width: '45', height: '21', pressed: false },
    { key: 'clear', width: '45', height: '21', pressed: false },
    { key: '', width: '47', height: '21', pressed: false, border: 'none' },
    { key: '', width: '47', height: '21', pressed: false, border: 'none' },
    { key: '', width: '47', height: '21', pressed: false, border: 'none' },
    { key: '', width: '47', height: '21', pressed: false, border: 'none' }
  ], [
    { key: '`', width: '36', height: '45', pressed: false },
    { key: '1', width: '45', height: '45', pressed: true },
    { key: '2', width: '45', height: '45', pressed: true },
    { key: '3', width: '45', height: '45', pressed: true },
    { key: '4', width: '45', height: '45', pressed: true },
    { key: '5', width: '45', height: '45', pressed: true },
    { key: '6', width: '45', height: '45', pressed: true },
    { key: '7', width: '45', height: '45', pressed: true },
    { key: '8', width: '45', height: '45', pressed: true },
    { key: '9', width: '45', height: '45', pressed: true },
    { key: '0', width: '45', height: '45', pressed: true },
    { key: '-', width: '45', height: '45', pressed: true },
    { key: '=', width: '45', height: '45', pressed: true },
    { key: '←', width: '109', height: '45', pressed: false },
    { key: 'insert', width: '45', height: '45', pressed: false },
    { key: 'home', width: '45', height: '45', pressed: false },
    { key: 'pg up', width: '45', height: '45', pressed: false },
    { key: 'cl bd', width: '45', height: '45', pressed: false },
    { key: '/', width: '45', height: '45', pressed: true },
    { key: '*', width: '45', height: '45', pressed: true },
    { key: '-', width: '45', height: '45', pressed: true }
  ], [
    { key: 'tab', width: '63', height: '45', pressed: false },
    { key: 'Q', width: '45', height: '45', pressed: true },
    { key: 'W', width: '45', height: '45', pressed: true },
    { key: 'E', width: '45', height: '45', pressed: true },
    { key: 'R', width: '45', height: '45', pressed: true },
    { key: 'T', width: '45', height: '45', pressed: true },
    { key: 'Y', width: '45', height: '45', pressed: true },
    { key: 'U', width: '45', height: '45', pressed: true },
    { key: 'I', width: '45', height: '45', pressed: true },
    { key: 'O', width: '45', height: '45', pressed: true },
    { key: 'P', width: '45', height: '45', pressed: true },
    { key: '[', width: '45', height: '45', pressed: false },
    { key: ']', width: '45', height: '45', pressed: false },
    { key: '\\', width: '81', height: '45', pressed: false },
    { key: 'delete', width: '45', height: '45', pressed: false },
    { key: 'end', width: '45', height: '45', pressed: false },
    { key: 'pg dn', width: '45', height: '45', pressed: false },
    { key: '7', width: '45', height: '45', pressed: true },
    { key: '8', width: '45', height: '45', pressed: true },
    { key: '9', width: '45', height: '45', pressed: true },
    { key: '', width: '45', height: '45', pressed: false }
  ], [
    { key: 'caps lock', width: '78', height: '45', pressed: false },
    { key: 'A', width: '45', height: '45', pressed: true },
    { key: 'S', width: '45', height: '45', pressed: true },
    { key: 'D', width: '45', height: '45', pressed: true },
    { key: 'F', width: '45', height: '45', pressed: true },
    { key: 'G', width: '45', height: '45', pressed: true },
    { key: 'H', width: '45', height: '45', pressed: true },
    { key: 'J', width: '45', height: '45', pressed: true },
    { key: 'K', width: '45', height: '45', pressed: true },
    { key: 'L', width: '45', height: '45', pressed: true },
    { key: ';', width: '45', height: '45', pressed: true },
    { key: '\'', width: '45', height: '45', pressed: true },
    { key: 'enter', width: '122', height: '45', pressed: false },
    { key: '', width: '47', height: '45', pressed: false, border: 'none' },
    { key: '', width: '47', height: '45', pressed: false, border: 'none' },
    { key: '', width: '47', height: '45', pressed: false, border: 'none' },
    { key: '4', width: '45', height: '45', pressed: true },
    { key: '5', width: '45', height: '45', pressed: true },
    { key: '6', width: '45', height: '45', pressed: true },
    { key: '', width: '45', height: '45', pressed: false }
  ], [
    { key: 'shift', width: '105', height: '45', pressed: false },
    { key: 'Z', width: '45', height: '45', pressed: true },
    { key: 'X', width: '45', height: '45', pressed: true },
    { key: 'C', width: '45', height: '45', pressed: true },
    { key: 'V', width: '45', height: '45', pressed: true },
    { key: 'B', width: '45', height: '45', pressed: true },
    { key: 'N', width: '45', height: '45', pressed: true },
    { key: 'M', width: '45', height: '45', pressed: true },
    { key: ',', width: '45', height: '45', pressed: true },
    { key: '.', width: '45', height: '45', pressed: true },
    { key: '/', width: '45', height: '45', pressed: true },
    { key: 'shift', width: '152', height: '45', pressed: false },
    { key: '', width: '47', height: '45', pressed: false, border: 'none' },
    { key: '↑', width: '45', height: '45', pressed: false },
    { key: '', width: '47', height: '45', pressed: false, border: 'none' },
    { key: '1', width: '45', height: '45', pressed: true },
    { key: '2', width: '45', height: '45', pressed: true },
    { key: '3', width: '45', height: '45', pressed: true },
    { key: '', width: '45', height: '45', pressed: false }
  ], [
    { key: 'ctrl', width: '45', height: '45', pressed: false },
    { key: 'fn', width: '45', height: '45', pressed: false },
    { key: 'win', width: '45', height: '45', pressed: false },
    { key: 'alt', width: '45', height: '45', pressed: false },
    { key: 'space', width: '347', height: '45', pressed: true },
    { key: 'alt gr', width: '45', height: '45', pressed: false },
    { key: 'fn', width: '45', height: '45', pressed: false },
    { key: 'win', width: '45', height: '45', pressed: false },
    { key: '\\', width: '72', height: '45', pressed: false },
    { key: '←', width: '45', height: '45', pressed: false },
    { key: '↓', width: '45', height: '45', pressed: false },
    { key: '→', width: '45', height: '45', pressed: false },
    { key: '0', width: '99', height: '45', pressed: true },
    { key: '.', width: '45', height: '45', pressed: true },
    { key: '', width: '45', height: '45', pressed: false }
  ]
],
  body = document.body,
  keyboard = document.querySelector('.keyboard'),
  input = document.querySelector('.input')
let caps = false

const renderKey = (obj, i) => {
  let divRow = document.getElementById(`${i + 1}-row`)
  let div = document.createElement('div')
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key === 'key') {
        div.textContent = obj[key]
      } else if (key === 'width') {
        div.style.width = `${obj[key]}px`
      } else if (key === 'height') {
        div.style.height = `${obj[key]}px`
      } else if (key === 'border') {
        div.style.border = `${obj[key]}`
        div.style.boxShadow = `${obj[key]}`
      } else if (key === 'pressed' && obj[key] === true) {
        div.setAttribute('pressed', true)
      } else if (key === 'pressed' && obj[key] === false) {
        div.setAttribute('pressed', false)
      }
    }
  }
  div.classList.add('key')
  divRow.append(div)
}

for (let i = 0; i < keySymbols.length; i++) {
  const div = document.createElement('div')
  div.id = `${i + 1}-row`
  div.style.display = 'flex'
  div.style.justifyContent = 'space-between'
  if (keySymbols.length > i) {
    div.style.marginBottom = '9px'
  }
  keyboard.append(div)
  keySymbols[i].forEach((item) => {
    renderKey(item, i)
  })
}

keyboard.addEventListener('click', (e) => {
  let target = e.target
  if (target && target.getAttribute('pressed') === 'true') {
    if (!Number.isInteger(target.outerText) && caps === true) {
      input.value += target.outerText
    } else if (!Number.isInteger(target.outerText) && caps === false) {
      input.value += target.outerText.toLowerCase()
    } else {
      input.value += target.outerText
    }
  }

  if (target.textContent === 'caps lock' && caps === false) {
    caps = true
  } else if (target.textContent === 'caps lock' && caps === true) {
    caps = false
  }
})