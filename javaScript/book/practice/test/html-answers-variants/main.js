const inputs = document.querySelectorAll('input[type="radio"]')

//1
// inputs.forEach(input => {
//   input.addEventListener('click', () => {
//     if (input.hasAttribute('data-right')) {
//       input.parentNode.style.border = '1px solid green'
//     }
//   })
// })

//2
const button = document.createElement('button'),
  test = document.querySelector('#test')

button.textContent = 'Проверить'

button.addEventListener('click', () => {
  inputs.forEach(input => {
    if (input.hasAttribute('data-right') && input.checked) {
      input.parentNode.style.border = '1px solid green'
    } else {
      input.parentNode.style.border = ''
    }
  })
})
test.append(button)