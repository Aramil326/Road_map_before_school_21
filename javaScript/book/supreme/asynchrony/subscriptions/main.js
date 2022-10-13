// 1
// function func1(arr) {
//   document.querySelector('#message').textContent = `Данные: ${arr} получены`
// }

// function func2(arr) {
//   for (let elem of arr) {
//     let li = document.createElement('li')
//     li.textContent = elem
//     document.querySelector('#list').append(li)
//   }
// }

// function func3(arr) {
//   document.querySelector('#amount').textContent = `Колчество элементов: ${arr.length} `
// }

// function func4(arr) {
//   let sum = 0
//   document.querySelector('#result').textContent = 0
//   for (let elem of arr) {
//     document.querySelector('#result').textContent = elem + +document.querySelector('#result').textContent
//   }
// }

// setTimeout(function () {
//   let arr = [1, 2, 3, 4, 5];

//   func1(arr);
//   func2(arr);
//   func3(arr);
//   func4(arr);
// }, 3000);

// 2
// let subsribers = {
// };
// // Функция для испускания события:
// function emit(name, data) {
//   if (subsribers[name]) {
//     for (let callback of subsribers[name]) {
//       callback(data);
//     }
//   }
// }

// // Функция для подписки на событие:
// function on(name, callback) {
//   if (!subsribers[name]) {
//     subsribers[name] = [];
//   }

//   subsribers[name].push(callback);
// }

// on('loaded', function (arr) {
//   document.querySelector('#message').textContent = `Данные: ${arr} получены`
// });

// on('loaded', function (arr) {
//   for (let elem of arr) {
//     let li = document.createElement('li')
//     li.textContent = elem
//     document.querySelector('#list').append(li)
//   }
// });

// on('loaded', function (arr) {
//   document.querySelector('#amount').textContent = `Колчество элементов: ${arr.length} `
// });

// on('loaded', function (arr) {
//   let sum = 0
//   document.querySelector('#result').textContent = 0
//   for (let elem of arr) {
//     document.querySelector('#result').textContent = elem + +document.querySelector('#result').textContent
//   }
// });

// setTimeout(function () {
//   emit('loaded', [1, 2, 3, 4, 5]);
// }, 3000);

// 3
// let subsribers = {
// };
// let currentHour = new Date().getHours();

// setInterval(function inSetTimeOut() {
//   let newHour = new Date().getHours();
//   if (currentHour < newHour) {
//     currentHour = newHour
//     emit('nextHour', newHour);
//   } else {
//     emit('nextHour', currentHour);
//   }
// }, 1000);

// function emit(name, data) {
//   if (subsribers[name]) {
//     console.log(subsribers[name])
//     for (let callback of subsribers[name]) {
//       callback(data);
//     }
//   }
// }

// function on(name, callback) {
//   if (!subsribers[name]) {
//     subsribers[name] = [];
//   }

//   subsribers[name].push(callback);
// }

// on('nextHour', function (currentHour) {
//   document.querySelector('.hour').textContent = `Текущий час:${currentHour}`
// });


