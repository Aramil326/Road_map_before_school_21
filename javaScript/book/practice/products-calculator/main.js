let name = document.querySelector('#name')
let price = document.querySelector('#price')
let amount = document.querySelector('#amount')
let add = document.querySelector('#add')
let table = document.querySelector('#table')
let total = document.querySelector('#total')

function createCell(tr, value, name) {
  let td
  td = document.createElement('td')
  td.textContent = value
  td.classList.add(`${name}`)
  tr.appendChild(td)
  return td
}

function allowEdit(td) {
  td.addEventListener('dblclick', function () {
    console.log(td)
    let input = document.createElement('input')
    input.value = td.textContent
    td.textContent = ''
    input.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        td.textContent = e.target.value
        input.remove
        if (td.classList.contains('price') || td.classList.contains('amount')) {
          td.parentNode.children[3].textContent = +td.parentNode.children[1].textContent * +td.parentNode.children[2].textContent
        }
      }
    })
    td.appendChild(input)
  });
}

function recountTotal() {
  let costs = table.querySelectorAll('.cost')
  let sum = 0;

  if (costs) {
    costs.forEach(element => {
      sum += Number(element.textContent)
      console.log(element.textContent)
    })
  }

  return sum
}

add.addEventListener('click', function () {
  let tr = document.createElement('tr')

  allowEdit(createCell(tr, name.value, 'name'));
  allowEdit(createCell(tr, price.value, 'price'));
  allowEdit(createCell(tr, amount.value, 'amount'));
  createCell(tr, price.value * amount.value, 'cost')
  let remove = createCell(tr, 'удалить', 'remove');
  remove.addEventListener('click', function () {
    remove.parentNode.remove()
    total.textContent = recountTotal()
  });

  table.appendChild(tr)
  total.textContent = recountTotal()
})