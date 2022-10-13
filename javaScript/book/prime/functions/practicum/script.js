// 1
// function func(arr) {
//   let sum = 0;

//   for (let elem of arr) {
//     sum += +elem;
//   }

//   return sum;
// }

// 2
// function func(num) {
//   let res = [];

//   for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//       res.push(i);
//     }
//   }
//   return res;
// }

// console.log(func(1024));

// 3
// function func(str) {
//   let res = str.split('');

//   return res;
// }

// 4
// console.log(func('123456789'));

// function func(str) {
//   let counter = str.length;
//   let res = [];

//   for (let i = 0; i < counter; i++) {
//     res.unshift(str[i]);
//     delete str[i];
//   }

//   return res.join('');
// }

// 5
// console.log(func('asdfghjkl'));

// function func(str) {
//   let res = '';

//   for (let elem of str) {
//     if (str.indexOf(elem) === 0) {
//       res += elem.toUpperCase();
//     } else {
//       res += elem;
//     }
//   }
//   return res;
// }

// 6
// console.log(func('asdfghjkl bsdfghjkl csdfghjkl'));

// function func(str) {
//   let arr = str.split(' ')
//   let res = '';
//   function toUpperCase(str) {
//     let res = ''
//     for (let elem of str) {
//       if (str.indexOf(elem) === 0) {
//         res += elem.toUpperCase();
//       } else {
//         res += elem;
//       }
//     }
//     return res;
//   }

//   for (let elem of arr) {
//     if (arr.indexOf(elem) !== arr.length - 1) {
//       res += `${toUpperCase(elem)} `
//     } else {
//       res += `${toUpperCase(elem)}`
//     }
//   }
//   return res;
// }

// 7
// console.log(func(5))

// function func(num) {
//   let arr = [];
//   for (let i = 0; i <= num; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// 8
// function getRandomElemFromArr(arr) {
//   function randomInteger(min, max) {
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
//   }

//   return arr[randomInteger(0, arr.length - 1)];
// }

// console.log(getRandomElemFromArr([1, 2, 3, 4, 5]));

// 9
// console.log(isSimple(71));

// function isSimple(num) {
//   let flag = true;
//   if (num <= 1) {
//     return false;
//   } else if (num == 2) {
//     return true;
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num > 1 && num % i === 0) {
//         flag = false;
//       }
//       return flag;
//     }
//   }
// }

// 10
// function getDividersSum(num) {
//   let res = [];
//   let sum = 0;

//   for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//       res.push(i);
//     }
//   }

//   for (let elem of res) {
//     sum += +elem
//   }

//   return sum;
// }

// function isNumbersFriends(num1, num2) {
//   if (getDividersSum(num1) === num2 && getDividersSum(num2) === num1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// 11
// function isNumbersFriends(max, include1 = true) {

//   var res = []
//   var allNumbers = { '1': +include1 };
//   var allNumbersTiny = null, limit = 100, tinyLimit = 0; //Для оптимизации поиска

//   var numbers = allNumbers;

//   for (simple = 2; simple <= max / 2; simple++) {

//     if (simple in allNumbers) continue;

//     if (simple >= limit) {

//       // После 100 создаем мини-массив, поскольку цикл по ключам объекта
//       // работает слишком долго, а нам чем дальше, тем более маленькие числа
//       // будут нужны для перебора

//       var tinyLimitNew = Math.floor((max + 100) / simple);
//       if (!allNumbersTiny) {
//         allNumbersTiny = {};
//         for (var i = 1; i <= tinyLimitNew; i++) allNumbersTiny[i] = allNumbers[i];

//         numbers = allNumbersTiny;
//       } else {
//         for (var i = tinyLimitNew + 1; i <= tinyLimit; i++) delete allNumbersTiny[i];
//       }

//       tinyLimit = tinyLimitNew;
//       limit += 100;
//     }

//     for (k in numbers) {

//       var product = k * simple;
//       if (product > max) break;

//       var prevSum = numbers[k] - include1, currSum = prevSum, prevProduct = +k;
//       var currPow = simple, sum;

//       while (product <= max) {

//         if (k == 1) {
//           currSum += currPow === simple ? 0 : prevProduct;
//         } else {
//           currSum += prevProduct + currPow + currPow * prevSum;
//         }
//         prevProduct = product;

//         sum = currSum + +include1;

//         allNumbers[product] = sum;
//         if (sum !== product && allNumbers[sum] === product) res.push([product, sum]);

//         if (product <= tinyLimit) allNumbersTiny[product] = sum;

//         currPow *= simple;
//         product *= simple;
//       }
//     }
//   }

//   console.log(res);
// }

// isNumbersFriends(100000000);

// 12
// function getDividersSum(num) {
//   let res = [];
//   let sum = 0;

//   for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//       res.push(i);
//     }
//   }

//   for (let elem of res) {
//     sum += +elem
//   }

//   return sum;
// }

// function isPerfectNumber(num) {
//   return num === getDividersSum(num);
// }

// console.log(isPerfectNumber(5))

// 13
// function getDividersSum(str) {
//   let res = 0;

//   for (let i = 0; i < str.length; i++) {
//     res += +str[i]
//   }

//   return res;
// }

// function isTicketGood(num) {
//   num = String(num);
//   return getDividersSum((num).slice(0, 3)) === getDividersSum((num).slice(3, 6))
// }

// console.log(isTicketGood(100011))

// 14
// function func(num1, num2) {
//   num1Dividers = getDividers(num1);
//   num2Dividers = getDividers(num2);
//   return num1Dividers.filter(el => num2Dividers.indexOf(el) > -1);
// }

// function getDividers(num) {
//   let res = [];

//   for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//       res.push(i);
//     }
//   }

//   return res;
// }

// console.log(func(24, 16))

// 15
// function transliter(str) {

//   const ru = {
//     'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
//     'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
//     'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
//     'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
//     'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
//     'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya', ' ': '-'
//   }, n_str = [];

//   str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');

//   for (var i = 0; i < str.length; ++i) {
//     n_str.push(
//       ru[str[i]]
//       || ru[str[i].toLowerCase()] == undefined && str[i]
//       || ru[str[i].toLowerCase()].replace(/^(.)/, function (match) { return match.toUpperCase() })
//     );
//   }

//   return n_str.join('');
// }

// console.log(transliter('Привет'))

// 16
// function intToWords(int, names) {
//   var result = [];
//   if (typeof int === 'number') {
//     int = int.toString();
//   } else if (typeof int !== 'string') {
//     int = '';
//   }
//   if (!(names instanceof Array) || (typeof names[0] !== 'string') || (typeof names[1] !== 'string') || (typeof names[2] !== 'string')) {
//     names = null;
//   }
//   if (int.length && !/[^0-9]/.test(int)) {
//     var selectName = function (number, names) {
//       return names[((parseInt(number) % 100 > 4) && (parseInt(number) % 100 < 20)) ? 2 : [2, 0, 1, 1, 1, 2][Math.min(parseInt(number) % 10, 5)]];
//     };
//     var name = null;
//     var zero = 'ноль';
//     if (int === '0') {
//       result.push(zero);
//     } else {
//       var from0To2 = [zero, 'одна', 'две'];
//       var from0To19 = [
//         zero, 'один', 'два', 'три', 'четыре',
//         'пять', 'шесть', 'семь', 'восемь', 'девять',
//         'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать',
//         'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
//       ];
//       var tens = [
//         'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
//         'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
//       ];
//       var hundreds = [
//         'сто', 'двести', 'триста', 'четыреста', 'пятьсот',
//         'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
//       ];
//       var thousands = [
//         ['тысяча', 'тысячи', 'тысяч'],
//         ['миллион', 'миллиона', 'миллионов'],
//         ['миллиард', 'миллиарда', 'миллиардов'],
//         ['триллион', 'триллиона', 'триллионов'],
//         ['квадриллион', 'квадриллиона', 'квадриллионов'],
//         ['квинтиллион', 'квинтиллиона', 'квинтиллионов'],
//         ['секстиллион', 'секстиллиона', 'секстиллионов'],
//         ['септиллион', 'септиллиона', 'септиллионов'],
//         ['октиллион', 'октиллиона', 'октиллионов'],
//         ['нониллион', 'нониллиона', 'нониллионов'],
//         ['дециллион', 'дециллиона', 'дециллионов']
//       ];
//       var unknown = '{неизвестно}';
//       var numberParts = int.replace(/(?=(\d{3})+(?!\d))/g, ' ').split(' ');
//       var i = numberParts.length - 1;
//       for (var j in numberParts) {
//         var numberPart = parseInt(numberParts[j]);
//         if (numberPart) {
//           var numberPartResult = [];
//           var hundred = Math.floor(numberPart / 100);
//           if (hundred) {
//             numberPartResult.push(hundreds[hundred - 1]);
//             numberPart -= hundred * 100;
//           }
//           if (numberPart > 19) {
//             var ten = Math.floor(numberPart / 10);
//             numberPartResult.push(tens[ten - 1]);
//             numberPart -= ten * 10;
//           }
//           if (numberPart) {
//             numberPartResult.push(((i === 1) && ([1, 2].indexOf(numberPart) !== -1)) ? from0To2[numberPart] : from0To19[numberPart]);
//           }
//           if (thousands[i - 1] !== undefined) {
//             numberPartResult.push(selectName(numberParts[j], thousands[i - 1]));
//           } else if (i !== 0) {
//             numberPartResult.push(unknown);
//           } else if (names) {
//             name = selectName(numberParts[j], names);
//           }
//           result.push(numberPartResult.join(' '));
//         }
//         i--;
//       }
//       if (!result.length) {
//         result.push(zero);
//       }
//     }
//     if (!name && names) {
//       name = selectName(0, names);
//     }
//     if (name) {
//       result.push(name);
//     }
//   }
//   return result.join(' ');
// }
