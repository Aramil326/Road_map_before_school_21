class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  getSalary() {
    return this.salary;
  }
}

class EmployeesCollection {
  constructor() {
    this.employees = [];
  }

  add(employee) {
    this.employees.push(employee);
  }
  show() {
    for (let employee of this.employees) {
      console.log(employee.getName() + ' ' + employee.getSalary());
    }
  }
  getAllSalaries() {
    let result = 0
    for (let employee of this.employees) {
      result += employee.getSalary()
    }
    return result
  }

  getAverageSalaries() {
    let result = 0
    for (let employee of this.employees) {
      result += employee.getSalary()
    }
    return Math.floor(result / this.employees.length)
  }
}

let ec = new EmployeesCollection;

ec.add(new Employee('john', 1250));
ec.add(new Employee('eric', 1950));
ec.add(new Employee('kyle', 2250));

ec.show();
console.log(ec.getAllSalaries())
console.log(ec.getAverageSalaries())