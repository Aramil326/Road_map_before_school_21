class Text {
  constructor(text) {
    this.text = text;
  }

  getCharacters() {
    return this.text.length
  }
  getNumberOfLetters() {
    return this.text.replace(/[^a-zа-я]+/g, '').length
  }
  getNumberOfSpaces() {
    return this.text.replace(/\S+/g, '').length
  }
  getCharactersWithoutSpaces() {
    return this.text.replace(/\s+/g, '').length
  }
  getWords() {
    return this.text.split(' ').filter(word => {
      if (word !== '') {
        return true
      } else {
        return false
      }
    })
  }
  getProposal() {
    return this.text.split('.').filter(word => {
      if (word !== '') {
        return true
      } else {
        return false
      }
    })
  }
}

let text = new Text('asdf 1234     .   asdf6546. as6d5f465as4d6f54.');

// console.log(text.getCharacters())
// console.log(text.getNumberOfLetters())
// console.log(text.getNumberOfSpaces())
// console.log(text.getCharactersWithoutSpaces())
// console.log(text.getWords())
// console.log(text.getProposal())