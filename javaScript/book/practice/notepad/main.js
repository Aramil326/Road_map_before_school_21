let texts = [
  'text1',
  'text2',
  'text3',
];
//1
const saveNoteButton = document.querySelector('#text button'),
  textarea = document.querySelector('#text textarea'),
  notes = document.querySelector('#notes'),
  oldLinks = document.querySelectorAll('#notes li'),
  addNoteButton = document.querySelector('#create button'),
  backToCreate = document.querySelector('.backToCreate'),
  currentMode = document.querySelector('#currentMode'),
  deleteLinks = document.querySelectorAll('.remove')

function disableAllLinks(links) {
  links.forEach(link => {
    link.classList.remove('active')
  })
}

function callbackForLinkClick(e) {
  let allLinks = document.querySelectorAll('#notes li'),
    key = null;
  if (e.target.tagName.toLowerCase() === 'span') {
    key = e.target.parentNode.attributes['data-key'].value
  } else {
    key = e.target.attributes['data-key'].value
  }

  saveNoteButton.setAttribute('data-mode', 'update')
  currentMode.textContent = 'update'

  saveNoteButton.setAttribute('data-key', key)

  disableAllLinks(allLinks)
  e.target.classList.add('active')
  textarea.value = texts[+key - 1]
}

oldLinks.forEach(oldLink => {
  oldLink.addEventListener('click', e => callbackForLinkClick(e))
})

saveNoteButton.addEventListener('click', function () {
  let mode = this.dataset.mode;
  if (mode == 'create') {
    texts.push(textarea.value)
    let li = document.createElement('li')
    li.innerHTML = `
    <span class="open">запись ${texts.length}</span>
    <span class="remove">X</span>`
    li.setAttribute('data-key', texts.length)
    li.addEventListener('click', e => callbackForLinkClick(e))
    notes.append(li)
  }

  if (mode == 'update') {
    let key = this.dataset.key;
    texts[key - 1] = textarea.value
  }
})

backToCreate.addEventListener('click', function () {
  saveNoteButton.setAttribute('data-mode', 'create')
  currentMode.textContent = 'create'
})

deleteLinks.forEach(deleteLink => {
  deleteLink.addEventListener('click', (e) => {
    e.target.parentNode.remove()
    texts.splice(e.target.parentNode.attributes['data-key'].value - 1, 1)
    console.log(texts)
  })
})