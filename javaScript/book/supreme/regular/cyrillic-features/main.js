// 1
// let str = 'wйw wяw wёw wqw';
// console.log(str.replace(/w[А-ЯЁа-яё]w/g, '!'))

// 2 
let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
console.log(str.replace(/[А-ЯЁа-яё]+/g, '!'))
