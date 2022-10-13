class Zate {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getYear() { return this.year; }
  getMonth() { return this.month; }
  getDay() { return this.day; }
  getWeekDayNumber() {
    let date = new Date(this.year, this.month - 1, this.day);
    return date.getDay()
  }
  getWeekDay() {
    let date = new Date(this.year, this.month - 1, this.day);
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()]
  }
  getMonthName() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let date = new Date(this.year, this.month - 1, this.day);
    return monthNames[date.getMonth()]
  }
}

class ZateExt extends Zate {
  addYears(year) {
    return this.year + year
  }
  subtractYears(year) {
    this.year - year
  }

  addMonths(month) {
    this.month + month
  }
  subtractMonths(month) {
    this.month - month
  }

  addDays(days) {
    this.days + days
  }
  subtractDays(days) {
    this.days - days
  }
}

let zate = new Zate(2022, 9, 02)

console.log(zate.getYear())
console.log(zate.getMonth())
console.log(zate.getDay())
console.log(zate.getWeekDayNumber())
console.log(zate.getWeekDay())
console.log(zate.getMonthName())