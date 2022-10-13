const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
  input.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      if (input.getAttribute('data-right') === input.value) {
        input.classList.add('right')
      } else {
        input.classList.add('wrong')
      }
    }
  })
})