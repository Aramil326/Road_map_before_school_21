// 1
let str = 'xaz xbz x1z xСz';
console.log(str.replace(/1[^ex]2/g, '!'));

// 2
console.log(str.replace(/x[^2-7]z/g, '!'));

// 3
console.log(str.replace(/x[^A-Z]+z/g, '!'));

// 4
console.log(str.replace(/x[^A-Za-z1-5]+z/g, '!'));