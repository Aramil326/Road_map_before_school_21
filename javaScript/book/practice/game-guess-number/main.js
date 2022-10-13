const game = () => {
  const randomNun = randomInteger(1, 100)

  let numFromUser = +prompt('The game started. The computer guessed a random number from 1 to 100. Your task is to guess this number. Enter the number:')

  while (isNaN(numFromUser)) {
    numFromUser = +prompt('You need to enter a number')
  }

  while (numFromUser !== randomNun) {
    if (numFromUser < randomNun) {
      numFromUser = +prompt('You didnt guess. Please enter a larger number')
      while (isNaN(numFromUser)) {
        numFromUser = +prompt('You need to enter a number')
      }
    } else if (numFromUser > randomNun) {
      numFromUser = +prompt('You didnt guess. Please enter a lower number')
      while (isNaN(numFromUser)) {
        numFromUser = +prompt('You need to enter a number')
      }
    }
  }
  alert('You won, the hidden number was ' + randomNun)
}

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

game()