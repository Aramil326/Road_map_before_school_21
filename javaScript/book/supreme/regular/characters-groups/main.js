// 1
// let str = 'a1a a2a a3a a4a a5a aba aca';
// console.log(str.replace(/a\da/g, '!'))

// 2
// let str = 'a1a a22a a333a a4444a a55555a aba aca';
// console.log(str.replace(/a\d+a/g, '!'))

// 3
// let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
// console.log(str.replace(/a\d*a/g, '!'))

// 4
// let str = 'avb a1b a2b a3b a4b a5b abb acb';
// console.log(str.replace(/a\Db/g, '!'))

// 5
// let str = 'ave a#b a2b a$b a4b a5b a-b acb';
// console.log(str.replace(/a\Wb/g, '!'))

// 6
let str = 'ave a#a a2a a$a a4a a5a a-a aca';
console.log(str.replace(/\s/g, '!'))
