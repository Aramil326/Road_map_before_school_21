class Position {
  constructor(position) {
    this.position = position;
  }
}

class Department {
  constructor(department) {
    this.department = department;
  }
}

class Employee {
  constructor(name, position, department) {
    this.name = name;
    this.position = position;
    this.department = department;
  }
}

let position = new Position('director');
let department = new Department('5');
let employee = new Employee('Alex', position, department);

console.log(employee.name)
console.log(employee.position.position)
console.log(employee.department.department)