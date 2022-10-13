// 1
// !function () {
//   console.log('!');
// }(); //!

// 2
// function() {
//   console.log('!');
// } (); //error

// 3
// let result = function () {
//   return '!';
// }();

// console.log(result); //!

// 4
// let result = function () {
//   return '!';
// };

// console.log(result); //code of function

// 5
// let result = function () {
//   return '!';
// };

// console.log(result()); //!

// 6
// let result = function () { return 1; }() + function () { return 2; }();
// console.log(result); //3

// 7
// let result = (function () {
//   return '!';
// }());

// console.log(result); //!

// 8
// let result = (function () {
//   return '!';
// })();

// console.log(result); //!

// 9
// let result = (function () {
//   return '!';
// });

// console.log(result); //code of function

// 10
// let result = (function () {
//   return '!';
// });

// console.log(result()); //!

// 11
//   (function (num1, num2) {
//     console.log(num1 + num2);
//   })(1, 2); //3

// 12
//   (function () {
//     return function () {
//       return function () {
//         console.log('!');
//       }
//     }
//   })()()();

// 13
//   (function (num1) {
//     return function (num2) {
//       console.log(num1 + num2);
//     }
//   })(1)(2);

// 14
//   (function (num1) {
//     return function (num2) {
//       return function (num3) {
//         console.log(num1 + num2 + num3);
//       }
//     }
//   })(1)(2)(3);

// 15
// let str = 'str';

// (function () {
//   console.log(1);
// })();//1

// 16
// let str = 'str'

// (function() {
// 	console.log(1);
// })(); //error
