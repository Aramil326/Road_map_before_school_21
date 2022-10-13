// №1
// let obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// }, sum = 0;

// for (let key1 in obj) {
//   let subObj = obj[key1];
//   for (let key2 in subObj) {
//     sum += obj[key1][key2];
//   }
// }

// console.log(sum);

// №2
// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }
// console.log(obj['2']['2']);
// console.log(obj['3']['1']);

// №3
// let obj = {
//   key1: {
//     a: 1,
//     b: 2,
//     c: {
//       d: 3,
//       e: 4,
//     },
//     f: 5,
//   },
//   key2: {
//     g: 6,
//     h: 7,
//   },
// }

// let sum = obj['key1']['a'] + obj['key1']['b'] + obj['key1']['c']['d'] + obj['key1']['c']['e'] + obj['key1']['f'] + obj['key2']['g'] + obj['key2']['h'];

// console.log(sum);