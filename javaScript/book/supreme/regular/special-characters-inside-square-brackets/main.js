// 1
// let str = 'aba aea aca aza axa a.a a+a a*a';
// console.log(str.replace(/a[.+*]a/g, '!'))

// 2
let str = 'xaz x.z x3z x@z x$z xrz';
console.log(str.replace(/x[^.@$]z/g, '!'))
