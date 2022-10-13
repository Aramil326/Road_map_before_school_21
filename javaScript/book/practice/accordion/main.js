const links = document.querySelectorAll('.link > a')

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    console.log()
    e.target.parentNode.parentNode.classList.toggle('active')
  })
})