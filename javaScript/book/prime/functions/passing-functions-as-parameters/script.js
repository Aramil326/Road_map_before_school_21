//1
// test(
//   function () { return 1; },
//   function () { return 2; },
//   function () { return 3; },
//   );
// function test(func1, func2, func3) {
//   console.log(func1() + func2() + func3()); // выведет 6
// }

//2
// function test(func1, func2, func3) {
//   console.log(func1() + func2() + func3());
// }

//3
// test(func1, func2, func3);
// function func1() {
//   return 1;
// }

// function func2() {
//   return 2;
// }

// function func3() {
//   return 3;
// }
// function test(func1, func2, func3) {
//   console.log(func1() + func2() + func3()); // выведет 6
// }

//4
// let func1 = function () {
//   return 1;
// }

// let func2 = function () {
//   return 2;
// }

// let func3 = function () {
//   return 3;
// }
// function test(func1, func2, func3) {
//   console.log(func1() + func2() + func3()); // выведет 6
// }
// test(func1, func2, func3);

//5
// test(function (num) {
//   return num * num * num;
// });

// function test(func) {
//   console.log(func(3));
// }

//6
// test(function func (num) {
//     return num * num * num;
//   });

//   function test(func) {
//     console.log(func(3));
//   }

//7
// let func = function (num) {
//   return num * num * num;
// }

// test(func);

// function test(func) {
//   console.log(func(3));
// }

//8
// let func = function (a, b) {
//   return a + b;
// }

// test(func);

// function test(func) {
//   console.log(func(2, 3));
// }

//9
// function func1(num) {
//   return num * num;
// }

// function func2(num) {
//   return num * num * num;
// }

// function test(num, func1, func2) {
//   return func1(num) + func2(num);
// }

// console.log(test(3, func1, func2));

//10
// function test(arr, func) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}

// 	return arr;
// }

// let result = test([1, 2, 3], function(num) {
// 	return num * num;
// });

// console.log(result);

//11
// function test(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = func(arr[i]);
//   }

//   return arr;
// }

// let result = test([1, 2, 3], function (num) {
//   return num * num * num;
// });

// console.log(result); 
