let flag = 0

const game = () => {
  renderBoard()

  let randomSlots = []

  for (let i = 0; i < 10; i++) {
    randomSlots.push(`${randomInteger(1, 10)}-${randomInteger(1, 10)}`)
  }
  console.log(randomSlots)

  const tbody = document.querySelector('.tbody')

  tbody.addEventListener('click', e => {
    for (let i = 0; i < randomSlots.length; i++) {
      if (randomSlots[i] === e.target.id) {
        e.target.classList.add('green-bd')
        randomSlots.splice(i, 1)
      } else {
        e.target.classList.add('red-bd')
      }
    }
    console.log(randomSlots)
    if (randomSlots.length === 0) {
      e.target.classList.add('green-bd')
      alert('You won')
      flag = 1
    }
  })

  let table = document.querySelector('table')
  table.style.pointerEvents = 'none'

  const button = document.querySelector('.start-game-button')
  button.addEventListener('click', () => timer(5))
}

const renderBoard = () => {
  const table = document.createElement('table'),
    tbody = document.createElement('tbody')

  table.classList.add('table')
  tbody.classList.add('tbody')


  document.body.append(table)
  table.append(tbody)

  for (let i = 1; i <= 10; i++) {
    let row = document.createElement('tr')
    tbody.append(row)
    for (let j = 1; j <= 10; j++) {
      let col = document.createElement('td')
      col.classList.add('cell')
      col.id = `${i}-${j}`
      if (j === 5 && i === 5) {
        col.style.borderRight = 'rgb(0, 17, 255) 2px solid'
        col.style.borderBottom = 'rgb(0, 17, 255) 2px solid'
      } else if (j === 5 && i === 6) {
        col.style.borderRight = 'rgb(0, 17, 255) 2px solid'
        col.style.borderTop = 'rgb(0, 17, 255) 2px solid'
      } else if (j === 6 && i === 5) {
        col.style.borderLeft = 'rgb(0, 17, 255) 2px solid'
        col.style.borderBottom = 'rgb(0, 17, 255) 2px solid'
      } else if (j === 6 && i === 6) {
        col.style.borderLeft = 'rgb(0, 17, 255) 2px solid'
        col.style.borderTop = 'rgb(0, 17, 255) 2px solid'
      } else if (j === 5 && i !== 5 && i !== 6) {
        col.style.borderRight = 'rgb(0, 17, 255) 2px solid'
      } else if (j === 6 && i !== 5 && i !== 6) {
        col.style.borderLeft = 'rgb(0, 17, 255) 2px solid'
      } else if (i === 5 && j !== 5 && j !== 6) {
        col.style.borderBottom = 'rgb(0, 17, 255) 2px solid'
      } else if (i === 6 && j !== 5 && j !== 6) {
        col.style.borderTop = 'rgb(0, 17, 255) 2px solid'
      }
      row.append(col)
    }
  }
}

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const timer = (minutes, seconds = 0) => {
  let table = document.querySelector('table')
  table.style.pointerEvents = 'auto'
  const addZero = (num) => {
    if (num <= 9) {
      return '0' + num
    } else {
      return num
    }
  }

  let timerMinutes = document.querySelector('#minutes'),
    timerSeconds = document.querySelector('#seconds')

  timerMinutes.textContent = addZero(minutes)
  timerSeconds.textContent = addZero(seconds)

  let timerId = setInterval(function () {
    if (flag === 1) {
      clearInterval(timerId)
    } else if (+timerMinutes.textContent === 0 && +timerSeconds.textContent === 0) {
      clearInterval(timerId)
      alert('You lose :(')
      timerMinutes.textContent = minutes
      timerSeconds.textContent = seconds
    } else if (+timerSeconds.textContent === 0) {
      timerMinutes.textContent = addZero((+timerMinutes.textContent) - 1)
      timerSeconds.textContent = 59
    } else {
      timerSeconds.textContent = addZero((+timerSeconds.textContent) - 1)
    }


  }, 1000);
}

game()