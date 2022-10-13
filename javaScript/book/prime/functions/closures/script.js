// 1
// function test() {
//   let num = 1;
//   return function () {
//     console.log(num++);
//   }
// }

// let func1 = test();
// func1();
// func1();

// 2
// function test() {
//   let num = 10;
//   return function () {
//     console.log(num--);
//   }
// }

// let func1 = test();
// func1();
// func1();

// 3
// function test() {
//   let num = 10;
//   return function () {
//     if (num >= 0) {
//       console.log(num--);
//     } else {
//       console.log('отсчет окончен');
//     }
//   }
// }

// let func1 = test();

// for (let i = 0; i <= 11; i++) {
//   func1();
// }

// 4
// function func() {
//   let num = 0;

//   return function () {
//     console.log(num);
//     num++;
//   };
// };

// func()(); //0
// func()(); //0
// func()(); //0

// 5
// function func() {
//   let num = 0;

//   return function () {
//     console.log(num);
//     num++;
//   };
// };

// let test = func;

// test()(); //0
// test()(); //0
// test()(); //0

// 6
// let counter = 0;

// function test() {
//   return function () {
//     console.log(counter);
//     counter++;
//   };
// };

// let func = test;

// let func1 = func();
// let func2 = func();
// func1(); //0
// func2(); //1
// func1(); //2
// func2(); //3

// 7
// function test() {
//   let counter = 0;

//   return function () {
//     return function () {
//       console.log(counter);
//       counter++;
//     };
//   };
// };

// let func = test()();

// let func1 = func;
// let func2 = func;
// func1(); //0
// func2(); //1
// func1(); //2
// func2(); //3

// 8
// function test() {
// 	let counter = 0;
	
// 	return function() {
// 		return function() {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };

// let func = test();

// let func1 = func();
// let func2 = func();
// func1();//0
// func2();//1
// func1();//2
// func2();//3
