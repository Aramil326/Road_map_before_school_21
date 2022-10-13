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

let zate = new Zate(2022, 9, 02)

console.log(zate.getYear())
console.log(zate.getMonth())
console.log(zate.getDay())
console.log(zate.getWeekDayNumber())
console.log(zate.getWeekDay())
console.log(zate.getMonthName())