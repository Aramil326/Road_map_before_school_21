class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  showName() {
    console.log(this.name);
  }

  showSalary() {
    console.log(this.salary);
  }

  salaryUp() {
    this.salary = this.salary * 0.1 + this.salary
  }
}

let employee = new Employee

employee.salary = 100

employee.showSalary()
employee.salaryUp()
employee.showSalary()