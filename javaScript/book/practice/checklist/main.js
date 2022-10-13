let input = document.querySelector('#input')
let list = document.querySelector('#list')

input.addEventListener('keypress', function (event) {
  if (event.key == 'Enter') {
    let li = document.createElement('li')

    let task = document.createElement('span')
    task.classList.add('task')
    task.innerHTML = this.value
    li.appendChild(task)

    let remove = document.createElement('span')
    remove.classList.add('remove')
    remove.innerHTML = 'удалить'
    li.appendChild(remove)

    let mark = document.createElement('span')
    mark.classList.add('mark')
    mark.innerHTML = 'сделано'
    li.appendChild(mark)

    list.appendChild(li)

    this.value = ''
  }
})

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('mark')) {
    e.target.parentNode.childNodes[0].style.textDecoration = 'line-through'
  }

  if (e.target.classList.contains('remove')) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode)
  }

  if (e.altKey && e.shiftKey) {
    let elem = e.target.parentNode.childNodes[0]
    let content = elem.textContent

    elem.innerHTML = `
    <input id="editInput">
    `
    elem.children[0].value = content


    elem.children[0].addEventListener('keypress', function (event) {
      if (event.key == 'Enter') {
        elem.textContent = event.target.value
      }

    })
  }
})