//1
// let table = document.querySelector('#table'),
//   button = document.querySelector('button')


// button.addEventListener('click', () => {
//   let tr = document.createElement('tr');
//   for (let i = 1; i <= 3; i++) {
//     let td = document.createElement('td');
//     td.textContent = '*'
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// })

//2
// let table = document.querySelector('#table'),
//   button = document.querySelector('button'),
//   tableObj = {
//     row: 2,
//     col: 2
//   };

// button.addEventListener('click', () => {
//   table.textContent = ''
//   tableObj.row++;
//   tableObj.col++;

//   for (let i = 1; i <= tableObj.row; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 1; j <= tableObj.col; j++) {
//       let td = document.createElement('td');
//       td.textContent = ''
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
// })