class Validator {
  isStrCorrect(str) {
    return /[0-9.,:]/.test(str)
  }

  isEmail(str) {
    return /.+@.+\..+/i.test(str)
  }

  isDomain(str) {
    return /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(str)
  }

  isNumber(str) {
    return /\D/.test(str)
  }
}

let validator = new Validator

console.log(validator.isStrCorrect('asdf'))
console.log(validator.isEmail('aram@gmail.com'))
console.log(validator.isDomain('stackoverflow.com'))
console.log(validator.isNumber('12 13'))