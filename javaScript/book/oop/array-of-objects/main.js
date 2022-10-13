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

let employees = [
  new Employee('john', 1250),
  new Employee('eric', 1280),
  new Employee('kyle', 1850),
];

for (let employee of employees) {
  console.log(employee.getName() + ' ' + employee.getSalary())
}