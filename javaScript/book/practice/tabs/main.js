const links = document.querySelectorAll('a'),
  tabs = document.querySelectorAll('.tab')

links.forEach((link, i, arr) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)
    arr.forEach((item) => { item.classList.remove('active') })
    e.target.classList.add('active')
    tabs.forEach((item) => { item.classList.remove('active') })
    tabs[i].classList.add('active')
  })
})
