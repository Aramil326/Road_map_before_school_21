//1
// let employees = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ], table = document.getElementById('table');

// for (let employee of employees) {
//   let tr = document.createElement('tr');

//   for (let key in employee) {
//     let td = document.createElement('td');
//     td.textContent = employee[key];
//     tr.appendChild(td);
//   }

//   table.appendChild(tr);
// }

//2
// let employees = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ], table = document.getElementById('table');

// for (let employee of employees) {
//   let tr = document.createElement('tr');

//   for (let key in employee) {
//     let td = document.createElement('td');
//     td.textContent = employee[key];
//     if (key == 'age') {
//       td.addEventListener('click', () => {
//         td.textContent = +td.textContent + 1
//       })
//     }
//     tr.appendChild(td);
//   }

//   table.appendChild(tr);
// }

//3
// let employees = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ], table = document.getElementById('table');

// for (let employee of employees) {
//   let tr = document.createElement('tr');

//   for (let key in employee) {
//     let td = document.createElement('td');
//     td.textContent = employee[key];
//     if (key == 'age') {
//       td.addEventListener('click', () => {
//         td.textContent = +td.textContent + 1
//       })
//     }
//     if (key == 'salary') {
//       td.addEventListener('click', () => {
//         td.textContent = +td.textContent + (+td.textContent * 0.1)
//       })
//     }
//     tr.appendChild(td);
//   }

//   table.appendChild(tr);
// }