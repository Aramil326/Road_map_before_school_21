let cells = document.querySelectorAll('#field td'),
  i = 0

function start(cells) {
  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      if (!cell.textContent) {
        cell.textContent = ['X', 'O'][i % 2];

        if (isVictory(cells)) {
          console.log('Victory ', cell.textContent)
        }

        if (isDraw(cells)) {
          console.log('draw')
        }

        i++;
      }
    })
  })
}

function isVictory(cells) {
  let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let comb of combs) {
    if (
      cells[comb[0]].textContent == cells[comb[1]].textContent &&
      cells[comb[1]].textContent == cells[comb[2]].textContent &&
      cells[comb[0]].textContent != ''
    ) {
      return true;
    }
  }

  return false;
}

function isDraw(cells) {
  let flag = true
  cells.forEach(cell => {
    if (!cell.textContent) {
      flag = false;
    }
  })
  return flag;
}

start(cells)
