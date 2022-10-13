// 1
// let str = '^xx axx ^zz bkk @ss';
// console.log(str.replace(/[\^@][a-zA-Z]{2}/g, '!'))

// 2
// let str = '^xx axx ^zz bkk @ss';
// console.log(str.replace(/[^\^@][a-zA-Z]{2}/g, '!'))

// 3
let str = '^xx axx ^zz bkk';
console.log(str.replace(/[^\^][a-zA-Z]{2}/g, '!'))
