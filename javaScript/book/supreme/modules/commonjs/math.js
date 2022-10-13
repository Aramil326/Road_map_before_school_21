function square(num) {
  return num * num;
}
function cube(num) {
  return num * num * num;
}
function avg(arr) {
  return sum(arr, 1) / arr.length;
}
function digitsSum(num) {
  return sum(String(num).split(''));
}

function sum(arr) {
  let res = 0;

  for (let elem of arr) {
    res += +elem;
  }

  return res;
}

module.exports = { square, cube, avg, digitsSum };