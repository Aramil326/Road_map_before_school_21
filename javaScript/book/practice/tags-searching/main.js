const tags = [
  { tagName: '<b>', descr: 'It is used to make a text bold.' },
  { tagName: '<base>', descr: 'This tag defines the base URL for all relative URL within the document.' },
  { tagName: '<basefont>', descr: 'This tag is used to set default font, size and color for all elements of document. (Not supported in HTML5)' }
]

const input = document.querySelector('#input')
const div = document.createElement('div')
document.body.append(div)

input.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    tags.forEach(item => {
      if (item.tagName === e.target.value) {
        div.innerHTML = ''
        div.textContent = item.descr
      }
    })
  }
})