class Month {
  constructor(monthNumber) {
    this.mountNumber = monthNumber;
  }

  getMonthNumber() {
    return this.MonthNumber;
  }
  getMonthName() {
    let dateWrap = new Date()
    return new Date(dateWrap.getFullYear(), this.mountNumber - 1, dateWrap.getDate()).toLocaleString('ru', { month: 'long' });
  }
  getMonthLastDay() {
    let dateWrap = new Date()
    return new Date(dateWrap.getFullYear(), this.mountNumber, 0).getDate()
  }
  getMonthFirstDayWeekNumber() {
    let dateWrap = new Date()
    return new Date(dateWrap.getFullYear(), this.mountNumber - 1, 1).getDay()
  }
  getMonthLastDayWeekDayNumber() {
    let dateWrap = new Date()
    return new Date(dateWrap.getFullYear(), this.mountNumber, 0).getDay()
  }
}

let month = new Month(10)
console.log(month.getMonthFirstDayWeekNumber())
console.log(month.getMonthLastDayWeekDayNumber())
