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

let date = new Date()

let calendarData = {
  year: +date.getFullYear(),
  mounth: +date.getMonth() + 1,
}

const renderDays = (obj) => {
  if (document.querySelector('.all-days')) {
    ul = document.querySelector('.all-days')
    ul.innerHTML = ''

    let allDaysInAMounth, today = new Date()

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (+key === calendarData.mounth) {
          allDaysInAMounth = obj[key]
        }
      }
    }

    for (let i = 0; i < allDaysInAMounth; i++) {
      let li = document.createElement('li')
      li.textContent = i + 1
      if (today.getDate() == i + 1 && today.getMonth() + 1 == calendarData.mounth) {
        li.style.color = 'red'
      }
      ul.append(li)
    }
  } else {
    const ul = document.createElement('ul'),
      calendar = document.querySelector('.calendar')

    ul.classList.add('all-days')
    calendar.append(ul)

    let allDaysInAMounth, today = new Date()

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (+key === calendarData.mounth) {
          allDaysInAMounth = obj[key]
        }
      }
    }

    for (let i = 0; i < allDaysInAMounth; i++) {
      let li = document.createElement('li')
      li.textContent = i + 1
      if (date.getDate() == i + 1 && today.getMonth() + 1 == calendarData.mounth) {
        li.style.color = 'red'
      }
      ul.append(li)
    }
  }
}

const renderMonthAndYear = () => {
  const wrapper = document.querySelector('.wrapper')

  switch (calendarData.mounth) {
    case 1:
      wrapper.textContent = `January ${calendarData.year}`
      break;
    case 2:
      wrapper.textContent = `February ${calendarData.year}`
      break;
    case 3:
      wrapper.textContent = `March ${calendarData.year}`
      break;
    case 4:
      wrapper.textContent = `April ${calendarData.year}`
      break;
    case 5:
      wrapper.textContent = `May ${calendarData.year}`
      break;
    case 6:
      wrapper.textContent = `June ${calendarData.year}`
      break;
    case 7:
      wrapper.textContent = `July ${calendarData.year}`
      break;
    case 8:
      wrapper.textContent = `August ${calendarData.year}`
      break;
    case 9:
      wrapper.textContent = `September ${calendarData.year}`
      break;
    case 10:
      wrapper.textContent = `October ${calendarData.year}`
      break;
    case 11:
      wrapper.textContent = `November ${calendarData.year}`
      break;
    case 12:
      wrapper.textContent = `December  ${calendarData.year}`
      break;
  }
}

const calendar = () => {
  const calendar = document.querySelector('.calendar'),
    control = document.createElement('div'),
    left = document.createElement('button'),
    right = document.createElement('button')

  control.classList.add('control')
  left.classList.add('left')
  right.classList.add('right')

  renderMonthAndYear()
  renderDays(daysInAMonth)

  control.append(left)
  control.append(right)
  calendar.append(control)

  right.textContent = '→'
  left.textContent = '←'


  left.addEventListener('click', () => {
    if (calendarData.mounth - 1 <= 0) {
      calendarData.year = calendarData.year - 1
      calendarData.mounth = 12
    } else {
      calendarData.mounth = calendarData.mounth - 1
    }
    renderDays(daysInAMonth)
    renderMonthAndYear()
  })

  right.addEventListener('click', () => {
    if (calendarData.mounth + 1 > 12) {
      calendarData.mounth = 1
      calendarData.year = calendarData.year + 1
    } else {
      calendarData.mounth = calendarData.mounth + 1
    }
    renderDays(daysInAMonth)
    renderMonthAndYear()
  })
}

calendar()