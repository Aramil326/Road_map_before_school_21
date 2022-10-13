let answers = [
  'ответ 1',
  'ответ 2',
  'ответ 3',
];

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