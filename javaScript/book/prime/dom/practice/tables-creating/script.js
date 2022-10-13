//1
// let table = document.querySelector('#table');

// for (let i = 0; i < 5; i++) {
//   let tr = document.createElement('tr');

//   for (let i = 0; i < 5; i++) {
//     let td = document.createElement('td');
//     tr.appendChild(td);
//   }

//   table.appendChild(tr);
// }

//2
// let table = document.querySelector('#table');

// for (let i = 0; i < 10; i++) {
//   let tr = document.createElement('tr');

//   for (let i = 0; i < 5; i++) {
//     let td = document.createElement('td');
//     tr.appendChild(td);
//   }

//   table.appendChild(tr);
// }

//3
// let table = document.querySelector('#table');

// for (let i = 0; i < 10; i++) {
//   let tr = document.createElement('tr');

//   for (let i = 0; i < 5; i++) {
//     let td = document.createElement('td');
//     td.textContent = 'x'
//     tr.appendChild(td);
//   }

//   table.appendChild(tr);
// }

//4
// let table = document.querySelector('#table'),
//   width = document.querySelector('.width'),
//   height = document.querySelector('.height')


// for (let i = 0; i < 10; i++) {
//   let tr = document.createElement('tr');

//   for (let i = 0; i < 5; i++) {
//     let td = document.createElement('td');
//     td.textContent = 'x'
//     tr.appendChild(td);
//   }

//   table.appendChild(tr);
// }

// width.addEventListener('change', (e) => {
//   console.log(e.target.value)
//   let td = document.querySelectorAll('td')

//   td.forEach((element) => {
//     element.style.width = e.target.value + 'px'
//   })
// })

// height.addEventListener('change', (e) => {
//   console.log(e.target.value)
//   let td = document.querySelectorAll('td')

//   td.forEach((element) => {
//     element.style.height = e.target.value + 'px'
//   })
// })