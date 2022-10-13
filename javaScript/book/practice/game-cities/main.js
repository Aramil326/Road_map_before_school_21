let field = document.querySelector('#field')


let cities = []

field.addEventListener('keydown', (e) => {

  if (e.keyCode === 13) {
    if (cities.length === 0) {
      messageOutput(true)
      cities.push(e.target.value)
    } else {
      messageOutput()
      responseСheck(cities, e.target.value)
      console.log(cities)
    }
    e.target.value = ''
  }
})

const responseСheck = (cities, currentCity) => {
  let flag = true
  cities.forEach(city => {
    if (city === currentCity) {
      flag = false
    }
  })

  let cityName = cities[cities.length - 1]
  if (cityName[cityName.length - 1] === 'ъ' || cityName[cityName.length - 1] === 'ь') {
    cityName = cityName.slice(0, cityName.length - 1)
  }

  if (cityName[cityName.length - 1] === currentCity[0].toLowerCase() && flag) {
    cities.push(currentCity)
    messageOutput(true)
  } else {
    messageOutput(false)
  }
}

function messageOutput(result) {
  const message = document.querySelector('#message'),
    player = document.querySelector('#player')

  if (cities.length % 2 !== 0) {
    player.textContent = '1 игрок ходит'
  } else if (cities.length % 2 === 0) {
    player.textContent = '2 игрок ходит'
  }

  if (result) {
    message.textContent = 'Молодец, следующий ход'
  } else {
    message.textContent = 'Еще раз подумай'
  }


  let timerId = setInterval(function () {
    message.textContent = ''
    if (message.textContent === '') {
      clearInterval(timerId);
    }
  }, 3000);


}