//1
// let arr = [1, 2, 3, 4, 55555]
// const ul = document.querySelector('#elem')

// arr.forEach((elem) => {
//   const li = document.createElement('li')
//   li.textContent = elem

//   ul.appendChild(li)
// })

//2
// let arr = [1, 2, 3, 4, 55555]
// const ul = document.querySelector('#elem')

// arr.forEach((elem) => {
//   const li = document.createElement('li')
//   li.textContent = elem
//   li.addEventListener('click', () => {
//     console.log(li.textContent)
//   })

//   ul.appendChild(li)
// })

//3
// let arr = [1, 2, 3, 4, 55555]
// const ul = document.querySelector('#elem')

// arr.forEach((elem) => {
//   const li = document.createElement('li')
//   li.textContent = elem
//   li.addEventListener('click', () => {
//     console.log(li.textContent)
//     li.textContent = li.textContent + '!'
//   })

//   ul.appendChild(li)
// })

//4
let arr = [1, 2, 3, 4, 55555]
const ul = document.querySelector('#elem')

arr.forEach((elem) => {
  const li = document.createElement('li')
  li.textContent = elem
  li.addEventListener('click', () => {
    console.log(li.textContent)
    if ((li.textContent.indexOf('!')) === -1) {
      li.textContent = li.textContent + '!'
    } else {
      console.log(li.textContent.indexOf('!'))
    }
  })

  ul.appendChild(li)
})