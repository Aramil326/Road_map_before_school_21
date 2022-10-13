let textarea = document.querySelector('.textarea'),
  textAreaContent, stringArr = [], howManyWords = 0

const div = document.createElement('div')
document.body.append(div)

textarea.addEventListener('blur', (e) => {
  textAreaContent = e.target.value.trim()

  stringArr = textAreaContent.split(" ")

  while (stringArr.indexOf("") > 0) {
    stringArr.splice(stringArr.indexOf(""), 1)
  }

  stringArr.forEach(item => {
    if (item.length > 1) {
      howManyWords++
    }
  })

  div.textContent = howManyWords + ' words.'
})