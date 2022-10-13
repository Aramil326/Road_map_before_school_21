// 1
// function func(obj) {
//   obj.a = '!';
// }

// let obj = { a: 1, b: 2, c: 3 };
// func(obj);
// console.log(obj); //{ a: !, b: 2, c: 3 }

// 2
// function func(arg) {
//   arg = '!';
// }

// let obj = { a: 1, b: 2, c: 3 };
// func(obj.a);
// console.log(obj);//{ a: 1, b: 2, c: 3 }

// 3
// function func(obj) {
//   obj = '!';
// }

// let obj = { a: 1, b: 2, c: 3 };
// func(obj.a);
// console.log(obj);//{ a: 1, b: 2, c: 3 }

// 4
// function func(arr) {
//   arr.splice(1, 1);
// }

// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);//[1, 3]

// 5
// function func(arr) {
//   arr.slice(1, 1);
// }

// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);//[1, 2, 3]

// 6
// function func(arr) {
// 	let newArr = arr;
// 	newArr[0] = '!';
// }

// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);//[1, 2, 3]