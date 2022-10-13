// 1
// class Student {

// }
// class Employee {

// }

// let employee = new Employee;
// console.log(employee instanceof Employee); //true
// console.log(employee instanceof Student); //false

// 2
class Student {
  constructor(name) {
    this.name = name;
  }
}
class Employee {
  constructor(name) {
    this.name = name;
  }
}

let users = [
  new Student('user1'),
  new Employee('user2'),
  new Student('user3'),
  new Employee('user4'),
  new Student('user5'),
  new Employee('user6'),
  new Student('user7'),
];

for (let elem of users) {
  if (elem instanceof Employee) {
    console.log(elem.name)
  }
}