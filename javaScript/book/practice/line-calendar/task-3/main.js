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
    calendar = document.querySelector('.calendar'),
    wrapper = document.querySelector('.wrapper')
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
    if (i + 1 === +(date.getDate())) {
      li.style.color = 'red'
    }
    ul.append(li)
  }

  switch ((+date.getMonth() + 1)) {
    case 1:
      wrapper.textContent = `January ${date.getFullYear()}`
      break;
    case 2:
      wrapper.textContent = `February ${date.getFullYear()}`
      break;
    case 3:
      wrapper.textContent = `March ${date.getFullYear()}`
      break;
    case 4:
      wrapper.textContent = `April ${date.getFullYear()}`
      break;
    case 5:
      wrapper.textContent = `May ${date.getFullYear()}`
      break;
    case 6:
      wrapper.textContent = `June ${date.getFullYear()}`
      break;
    case 7:
      wrapper.textContent = `July ${date.getFullYear()}`
      break;
    case 8:
      wrapper.textContent = `August ${date.getFullYear()}`
      break;
    case 9:
      wrapper.textContent = `September ${date.getFullYear()}`
      break;
    case 10:
      wrapper.textContent = `October ${date.getFullYear()}`
      break;
    case 11:
      wrapper.textContent = `November ${date.getFullYear()}`
      break;
    case 12:
      wrapper.textContent = `December  ${date.getFullYear()}`
      break;
  }
}


allDays(daysInAMonth)