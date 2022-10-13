// 1
// let promise = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve('lorem ipsum dollar'); // завершаем промис
//   }, 5000);
// });

// promise.then(function (resolve) {
//   alert(resolve)
// })

// 2
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let isError = false;
    if (!isError && randomInteger(0, 5) !== 0) {
      resolve(randomInteger(0, 5) / 1);   // данные промиса
    } else {
      reject('error in promise'); // ваш текст ошибки
    }
  }, 100);
});

promise.then(function (result) {
  console.log(result); // выведет результат промиса
}, function (error) {
  console.log(error);  // выведет текст ошибки
});

function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}