const parent = document.querySelector('#parent'),
  button = document.querySelector('#button'),
  oldLi = document.querySelectorAll('li')

let counter = oldLi.length

oldLi.forEach(e => {
  e.addEventListener('click', () => {
    e.parentNode.removeChild(e)
  })
})

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = ++counter;
  parent.append(li)
})