// 1
// let obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 3,
//     e: 4
//   },
//   f: {
//     g: 5,
//     j: 6,
//     k: {
//       l: 7,
//       m: {
//         n: 8,
//         o: 9
//       }
//     }
//   }
// }

// function func(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'object') {
//       func(obj[key]);
//     } else {
//       console.log(obj[key]);
//     }
//   }
// }

// func(obj);

// 2
// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// let newArr = [];

// function func(arr) {
//   for (let elem of arr) {
//     if (typeof elem == 'object') {
//       func(elem);
//     } else {
//       newArr.push(elem);
//     }
//   }
// }

// func(arr);
// console.log(newArr);

// 3
// let obj = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } };
// let sum = 0;
// function func(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'object') {
//       func(obj[key]);
//     } else {
//       sum += obj[key];
//     }
//   }
// }
// func(obj);
// console.log(sum);

// 4
// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// let str = '';

// function func(arr) {
//   for (let elem of arr) {
//     if (typeof elem == 'object') {
//       func(elem);
//     } else {
//       str += elem;
//     }
//   }
// }

// func(arr);
// console.log(str);

// 5
// function func(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'object') {
//       arr[i] = func(arr[i]);
//     } else {
//       arr[i] = arr[i] * arr[i];
//     }
//   }

//   return arr;
// }

// console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));
