let textarea = document.querySelector('.textarea')

const div = document.createElement('div')
document.body.append(div)

const ul = document.createElement('ul')

textarea.addEventListener('blur', (e) => {
  let textAreaContent, stringArr = [], howManyWords = 0, howManyCharacters = 0, howManyCharactersWithoutSpaces = 0, allSymbols = [], uniqueSymbols = []

  textAreaContent = e.target.value.trim()
  howManyCharacters = e.target.value.length
  stringArr = textAreaContent.split(" ")

  while (stringArr.indexOf("") > 0) {
    stringArr.splice(stringArr.indexOf(""), 1)
  }

  stringArr.forEach(item => {
    if (item.length > 1) {
      howManyWords++
    }
    howManyCharactersWithoutSpaces += item.length
  })

  div.textContent = howManyWords + ' words. ' + howManyCharacters + ' characters. ' + howManyCharactersWithoutSpaces + ' characters without spaces.'

  allSymbols = textAreaContent.split("")

  for (let i = 0; i < allSymbols.length; i++) {
    let uniqueSymbolsCounter = 0
    if (uniqueSymbols.length === 0) {
      uniqueSymbols.push('')
      uniqueSymbols[uniqueSymbols.length - 1] = new Array()
      uniqueSymbols[uniqueSymbols.length - 1].push(allSymbols[0])
    } else {
      for (let j = 0; j < uniqueSymbols.length; j++) {
        if (allSymbols[i] === uniqueSymbols[j][0]) {
          uniqueSymbolsCounter += 1
          uniqueSymbols[j].push(allSymbols[i])
        }
      }
      if (uniqueSymbolsCounter === 0) {
        uniqueSymbols.push('')
        uniqueSymbols[uniqueSymbols.length - 1] = new Array()
        uniqueSymbols[uniqueSymbols.length - 1].push(allSymbols[i])
      }
    }
  }

  console.log(uniqueSymbols)
  div.append(ul)
  ul.textContent = ''
  uniqueSymbols.forEach((item) => {
    const li = document.createElement('li')
    if (item[0] === ' ') {
      li.textContent = `' ' - ${(item.length / allSymbols.length).toFixed(3)}%`
    } else {
      li.textContent = item[0] + ' - ' + (item.length / allSymbols.length).toFixed(3) + '%'
    }
    ul.append(li)
  })
})