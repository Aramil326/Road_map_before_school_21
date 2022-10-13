let questions = [
  {
    text: 'вопрос 1?',
    right: 0,
    variants: [
      'вариант 1',
      'вариант 2',
      'вариант 3'
    ]
  },
  {
    text: 'вопрос 2?',
    right: 1,
    variants: [
      'вариант 1',
      'вариант 2',
      'вариант 3'
    ]
  },
  {
    text: 'вопрос 3?',
    right: 2,
    variants: [
      'вариант 1',
      'вариант 2',
      'вариант 3'
    ]
  },
];

const test = document.querySelector('#test'),
  button = document.querySelector('#button')


for (let question of questions) {
  let div = document.createElement('div')

  let p = document.createElement('p')
  p.textContent = question.text
  div.append(p)

  question.variants.forEach((variant, i) => {
    let label = document.createElement('label')
    if (i === question.right) {
      label.innerHTML = `
      <input type="radio" name="1" data-right>
      ${variant}
      `
    } else {
      label.innerHTML = `
      <input type="radio" name="1">
      ${variant}
      `
    }
    div.append(label)
  })

  test.append(div)
}

button.addEventListener('click', () => {
  let inputs = document.querySelectorAll('input')
  inputs.forEach(input => {
    if (input.hasAttribute('data-right') && input.checked) {
      input.parentNode.style.border = '1px solid green'
    } else {
      input.parentNode.style.border = ''
    }
  })
})