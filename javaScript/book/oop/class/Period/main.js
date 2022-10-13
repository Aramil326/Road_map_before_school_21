class Period {
  constructor(startTime, endTime) {
    this.startTime = startTime;
    this.endTime = endTime;
  }

  diffInSec() {
    let timeDiff = Math.abs(this.endTime.getTime() - this.startTime.getTime())
    return Math.ceil(timeDiff / 1000)
  }
  diffInMin() {
    let timeDiff = Math.abs(this.endTime.getTime() - this.startTime.getTime())
    return Math.ceil(timeDiff / (1000 * 60))
  }
  diffInHour() {
    let timeDiff = Math.abs(this.endTime.getTime() - this.startTime.getTime())
    return Math.ceil(timeDiff / (1000 * 60 * 60))
  }
  diffInDays() {
    let timeDiff = Math.abs(this.endTime.getTime() - this.startTime.getTime())
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
  }
}

let date1 = new Date("01/08/2022");
let date2 = new Date("02/08/2022");

let time = new Period(date1, date2)

console.log(time.diffInSec())
console.log(time.diffInMin())
console.log(time.diffInHour())
console.log(time.diffInDays())