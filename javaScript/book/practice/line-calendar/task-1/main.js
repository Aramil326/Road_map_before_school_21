const addZero = (num) => {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}

const daysInAMonth = {
  01: 31,
  02: 28,
  03: 31,
  04: 30,
  05: 31,
  06: 30,
  07: 31,
  08: 31,
  09: 30,
  10: 31,
  11: 30,
  12: 31
}
let date = new Date();
console.log(addZero(date.getFullYear()) + '-' + addZero(+date.getMonth() + 1) + '-' + addZero(date.getDate()));

const allDays = (obj) => {
  const ul = document.createElement('ul'),
    calendar = document.querySelector('.calendar')
  ul.classList.add('all-days')
  calendar.append(ul)
  let allDaysInAMounth

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (+key === +date.getMonth() + 1) {
        allDaysInAMounth = obj[key]
      }
    }
  }

  for (let i = 0; i < allDaysInAMounth; i++) {
    let li = document.createElement('li')
    li.textContent = i + 1
    ul.append(li)
  }
}


allDays(daysInAMonth)
