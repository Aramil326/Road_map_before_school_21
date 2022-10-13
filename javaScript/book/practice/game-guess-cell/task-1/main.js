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
      alert('You won')
    }
  })
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
      row.append(col)
    }
  }
}

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

game()