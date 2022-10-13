let questionsAnswers = {
  'Вопрос 1?': 'ответ 1',
  'Вопрос 2?': 'ответ 2',
  'Вопрос 3?': 'ответ 3',
}

const test = document.querySelector('.test')

for (let key in questionsAnswers) {
  const div = document.createElement('div');
  div.innerHTML = `
  <p>${key}</p>
  <input>
  `
  test.append(div)
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const questions = document.querySelectorAll('input')
  questions.forEach((question, i) => {
    if (questionsAnswers[`Вопрос ${i + 1}?`] === question.value) {
      question.classList.add('right')
    } else {
      question.classList.add('wrong')
    }
  })
})