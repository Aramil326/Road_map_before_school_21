// 1
// let str = 'aba aea aca aza axa';
// console.log(str.replace(/a[bex]a/g, '!'))

// 2
// let str = 'a1a a3a a7a a9a aba';
// console.log(str.replace(/a[3-6]a/g, '!'))

// 3
// let str = 'aba aea afa aha aga';
// console.log(str.replace(/a[a-g]a/g, '!'))

// 4
// let str = 'aba aea afa aha aga';
// console.log(str.replace(/a[a-fj-z]a/g, '!'))

// 5
// let str = 'aAa aea aEa aJa a3a';
// console.log(str.replace(/a[a-fA-D]a/g, '!'))

// 6
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str.replace(/a[a-z]+a/g, '!'))

// 7
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str.replace(/a[a-zA-Z]+a/g, '!'))

// 8
let str = 'aAXa aeffa aGha aza ax23a a3sSa';
console.log(str.replace(/a[a-z0-9]+a/g, '!'))
