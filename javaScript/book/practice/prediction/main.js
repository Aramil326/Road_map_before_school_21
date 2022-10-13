const goodPredictions = [
  'you will have a great day',
  'you will have a bad day',
  'you will receive an award today',
  `you won't get an award today`,
  'you will have a new good friend',
  'today you will lose a good friend',
  'you win the lottery',
  'you will lose the lottery',
  'you make peace with those with whom you are at enmity',
  'today you will quarrel with someone with whom you have been friends for a long time',
  'you are on the right track',
  'you are on the wrong track',
  'a surge of energy will help you cope with a large amount of unplanned work',
  'you will have little energy today'
]
// badPredictions = [
//   'working with new partners will not be profitable'
// ]

const timer = document.querySelector('#timer'),
  text = document.querySelector('#text'),
  start = document.querySelector('#start'),
  stop = document.querySelector('#stop')

start.addEventListener('click', (e) => {
  start.style.display = 'none'
  stop.style.display = 'block'
  let timerId = setInterval(() => {
    if (+timer.textContent < goodPredictions.length) {
      timer.textContent = +timer.textContent + 1
    } else {
      timer.textContent = 1
    }
  }, 100)

  stop.addEventListener('click', () => {
    stop.style.display = 'none'
    clearInterval(timerId)
    text.textContent = goodPredictions[+timer.textContent - 1]
    if (+timer.textContent % 2 == 0) {
      text.style.color = 'red'
      timer.style.color = 'red'
    } else {
      text.style.color = 'green'
      timer.style.color = 'green'
    }
  })
})