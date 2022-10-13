let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

draw(body, year, month);

function draw(body, year, month) {
  let arr = range(getLastDay(year, month));

  let firstWeekDay = getFirstWeekDay(year, month);
  let lastWeekDay = getLastWeekDay(year, month);

  let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
  createTable(body, nums, year, month)
}

function createTable(parent, arr, year, month) {
  parent.textContent = '';
  addYearAndMounth(document.querySelector('.info'), year, month)
  let cells = [];

  for (let sub of arr) {
    let tr = document.createElement('tr');

    for (let num of sub) {
      let td = document.createElement('td');
      td.textContent = num;
      tr.appendChild(td);

      cells.push(td);
    }

    parent.appendChild(tr);
  }

  return cells;
}

function addYearAndMounth(parent, year, month) {
  const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const d = new Date(`${year}-${month}`);
  parent.textContent = `${monthNames[d.getMonth()]} ${d.getFullYear()}`
}

function normalize(arr, left, right) {
  for (let i = 0; i < left; i++) {
    arr.unshift('');
  }
  for (var i = 0; i < right; i++) {
    arr.push('');
  }

  return arr;
}

function getFirstWeekDay(year, month) {
  let date = new Date(year, month, 1);
  let num = date.getDay();

  if (num == 0) {
    return 6;
  } else {
    return num - 1;
  }
}

function getLastWeekDay(year, month) {
  let date = new Date(year, month + 1, 0);
  let num = date.getDay();

  if (num == 0) {
    return 6;
  } else {
    return num - 1;
  }
}

function getLastDay(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

function range(count) {
  let arr = [];

  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }

  return arr;
}

function chunk(arr, n) {
  let result = [];
  let count = Math.ceil(arr.length / n);

  for (let i = 0; i < count; i++) {
    let elems = arr.splice(0, n);
    result.push(elems);
  }

  return result;
}

function getNextYear(oldYear, oldMonth) {
  if (oldMonth == 12) {
    year += 1
    month = 0
    return oldYear + 1
  } else {
    return oldYear
  }
}

function getNextMonth(oldMonth) {
  if (oldMonth == 12) {
    month = 1
    return 1
  } else {
    month += 1
    return oldMonth + 1
  }
}

function getPrevYear(oldYear, oldMonth) {
  if (oldMonth == 1) {
    year -= 1
    month = 13
    return oldYear - 1
  } else {
    return oldYear
  }
}

function getPrevMonth(oldMonth) {
  if (oldMonth == 1) {
    month = 12
    return 12
  } else {
    month -= 1
    return oldMonth - 1
  }
}

next.addEventListener('click', function () {
  draw(body, getNextYear(year, month), getNextMonth(month));
});

prev.addEventListener('click', function () {
  draw(body, getPrevYear(year, month), getPrevMonth(month));
});

































// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');

// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;

// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');

// Date.prototype.daysInMonth = function () {
//   return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
// };

// function range(count) {
//   let result = [];

//   for (let i = 0; i < count; i++) {
//     result.push(i + 1)
//   }

//   return result;
// }

// function getLastDay(year, month) {
//   return new Date(year, month, 0).getDate();
// }

// function getFirstWeekDay(year, month) {
//   let date = new Date(`${year}-${month}-1`)
//   return date.getDay() - 1;
// }

// function getLastWeekDay(year, month) {
//   let date = new Date(`${year}-${month}`)
//   date = new Date(`${year}-${month}-${date.daysInMonth()}`)
//   return date.getDay() - 1;
// }

// function normalize(arr, left, right) {
//   for (let i = 0; i < left; i++) {
//     arr.unshift('')
//   }

//   for (let i = 0; i < right; i++) {
//     arr.push('')
//   }

//   return arr
// }

// function chunk(arr, n) {
//   let result = []
//   let counter = Math.ceil(arr.length / n)
//   for (let i = 0; i < counter; i++) {
//     let elems = arr.splice(0, n);
//     result.push(elems);
//   }

//   return result
// }

// function createTable(parent, arr, year, month) {
//   addYearAndMounth(document.querySelector('.info'), year, month)

//   for (let i = 0; i < arr.length; i++) {
//     let tr = document.createElement('tr')
//     for (let j = 0; j < arr[i].length; j++) {
//       let td = document.createElement('td')
//       td.textContent = arr[i][j]
//       tr.append(td)
//     }
//     parent.append(tr)
//   }
// }

// function draw(body, year, month) {
//   body.textContent = ''
//   let arr = range(getLastDay(year, month));

//   let firstWeekDay = getFirstWeekDay(year, month);
//   let lastWeekDay = getLastWeekDay(year, month);

//   let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
//   createTable(body, nums, year, month)
// }

// function addYearAndMounth(parent, year, month) {
//   const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//     "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
//   ];

//   const d = new Date(`${year}-${month}`);
//   parent.textContent = `${monthNames[d.getMonth()]} ${d.getFullYear()}`
// }

// function getNextYear(oldYear, oldMonth) {
//   if (oldMonth == 12) {
//     year += 1
//     month = 0
//     return oldYear + 1
//   } else {
//     return oldYear
//   }
// }

// function getNextMonth(oldMonth) {
//   if (oldMonth == 12) {
//     month = 1
//     return 1
//   } else {
//     month += 1
//     return oldMonth + 1
//   }
// }

// function getPrevYear(oldYear, oldMonth) {
//   if (oldMonth == 1) {
//     year -= 1
//     month = 13
//     return oldYear - 1
//   } else {
//     return oldYear
//   }
// }

// function getPrevMonth(oldMonth) {
//   if (oldMonth == 1) {
//     month = 12
//     return 12
//   } else {
//     month -= 1
//     return oldMonth - 1
//   }
// }

// next.addEventListener('click', function () {
//   draw(body, getNextYear(year, month), getNextMonth(month));
// });

// prev.addEventListener('click', function () {
//   draw(body, getPrevYear(year, month), getPrevMonth(month));
// });

// draw(body, year, month)