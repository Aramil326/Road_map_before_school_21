const spoilerToogle = document.querySelectorAll('.toggle'),
  spoilerParagraph = document.querySelectorAll('.spoiler')

spoilerToogle.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    e.target.parentNode.nextElementSibling.classList.toggle('active')
  })
})