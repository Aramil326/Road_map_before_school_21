let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
let table = document.querySelector('#table')

for (let subArr of arr) {
  let tr = document.createElement('tr')

  for (let elem of subArr) {
    let td = document.createElement('td')
    td.textContent = elem
    tr.appendChild(td)
  }

  table.appendChild(tr)
}

const button = document.querySelector('button')

button.addEventListener('click', () => {
  const td = document.querySelectorAll('td')
  td.forEach(e => {
    e.textContent = +e.textContent * +e.textContent
  })
})