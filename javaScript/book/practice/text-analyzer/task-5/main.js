let textarea = document.querySelector('.textarea')

const div = document.createElement('div'),
  wordsDiv = document.createElement('div'),
  charactersDiv = document.createElement('div'),
  charactersWithoutSpacesDiv = document.createElement('div'),
  percentDiv = document.createElement('div'),
  wordsInput = document.querySelector('#words'),
  characters = document.querySelector('#characters'),
  charactersWithoutSpaces = document.querySelector('#characters_without_spaces'),
  percent = document.querySelector('#percent')


document.body.append(div)
div.classList.add('statucs')

wordsDiv.classList.add('words-div')
div.append(wordsDiv)
charactersDiv.classList.add('characters-div')
div.append(charactersDiv)
charactersWithoutSpacesDiv.classList.add('characters-without-spaces-div')
div.append(charactersWithoutSpacesDiv)
percentDiv.classList.add('percent-div')
div.append(percentDiv)

const ul = document.createElement('ul')
ul.classList.add('percents')

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

  wordsDiv.textContent = howManyWords + ' words. '
  charactersDiv.textContent = howManyCharacters + ' characters. '
  charactersWithoutSpacesDiv.textContent = howManyCharactersWithoutSpaces + ' characters without spaces.'

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


  percentDiv.append(ul)
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



wordsInput.addEventListener('click', (e) => {
  if (e.target.checked === false) {
    wordsDiv.style.display = 'none'
  } else {
    wordsDiv.style.display = 'block'
  }
})

characters.addEventListener('click', (e) => {
  if (e.target.checked === false) {
    charactersDiv.style.display = 'none'
  } else {
    charactersDiv.style.display = 'block'
  }
})

charactersWithoutSpaces.addEventListener('click', (e) => {
  if (e.target.checked === false) {
    charactersWithoutSpacesDiv.style.display = 'none'
  } else {
    charactersWithoutSpacesDiv.style.display = 'block'
  }
})

percent.addEventListener('click', (e) => {
  if (e.target.checked === false) {
    percentDiv.style.display = 'none'
  } else {
    percentDiv.style.display = 'block'
  }
})