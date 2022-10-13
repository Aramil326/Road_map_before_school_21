export function square(num) {
  return num ** 2;
}
export function cube(num) {
  return num ** 3;
}
export function avg(arr) {
  return sum(arr, 1) / arr.length;
}
export function digitsSum(num) {
  return sum(String(num).split(''));
}

// вспомогательная функция
export function sum(arr) {
  let res = 0;

  for (let elem of arr) {
    res += +elem;
  }

  return res;
}