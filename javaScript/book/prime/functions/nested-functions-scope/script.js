// 1
// function test() {
//   let num = 1;

//   function func() {
//     console.log(num);
//   }

//   func();
// }

// test(); //1

// 2
// function test() {
//   let num = 1;

//   function func() {
//     console.log(num);
//   }
// }

// test(); //nothing

// 3
// function test() {
//   let num = 1;

//   function func() {
//     console.log(num);
//   }

//   func();
// } //nothing

// 4
// function test() {
//   let num;

//   function func() {
//     console.log(num);//undefined
//   }

//   num = 1
//   func(); //1

//   num = 2
//   func(); //2
// }

// test();

// 5
// function test(num1, num2) {
//   function func() {
//     console.log(num1 + num2); //3
//   }

//   func();
// }

// test(1, 2);

// 6
// function test(num1, num2) {
//   function func() {
//     console.log(num1 + num2);
//   }

//   num1 = 2;
//   func(); //4
// }

// test(1, 2);

// 7
// function test(num) {
//   function func(localNum) {
//     console.log(localNum);
//   }

//   func(num);
// }

// test(1); //1

// 8
// function test(num) {
//   function func(localNum) {
//     console.log(localNum);
//   }

//   func(num + 1);
// }

// test(1); //2

// 9
// function test(num) {
//   function func(localNum) {
//     console.log(num);
//   }

//   func(num + 1);
// }

// test(1); //2

// 10
// function test(num) {
//   function func(localNum) {
//     localNum = 2;
//   }

//   func(num);
//   console.log(num);
// }

// test(1); //1

// 11
// function test(num) {
//   function func(localNum) {
//     localNum = 2;
//   }

//   func(num);
//   console.log(localNum);
// }

// test(1); //error

// 12
// function test(num) {
//   function func(localNum) {
//     num = 2;
//   }

//   func(num);
//   console.log(num);
// }

// test(1); //2

// 13
// function test(num) {
//   function func(num) {
//     console.log(num);
//   }

//   func(num);
// }

// test(1); //1

// 14
// function test(num) {
//   function func(num) {
//     num = 2;
//   }

//   func(num);
//   console.log(num);
// }

// test(1); //1

// 15
// function test(num) {
//   function func(num) {
//     console.log(num);
//   }

//   num = 2;
//   func(num);
// }

// test(1); //2

// 16
// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
	
// 	func(num);
// 	num = 2;
// }

// test(1); //1