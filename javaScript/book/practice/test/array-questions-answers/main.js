let answers = [
  'ответ 1',
  'ответ 2',
  'ответ 3',
], questions = [
  'вопрос 1?',
  'вопрос 2?',
  'вопрос 3?'
];

const test = document.querySelector('.test')

questions.forEach(elem => {
  const div = document.createElement('div');
  div.innerHTML = `
  <p>${elem}</p>
  <input>
  `
  test.append(div)
})

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const questions = document.querySelectorAll('input')
  questions.forEach((question, i) => {
    console.log(question.value)
    if (question.value === answers[i]) {
      question.classList.add('right')
    } else {
      question.classList.add('wrong')
    }
  })
})