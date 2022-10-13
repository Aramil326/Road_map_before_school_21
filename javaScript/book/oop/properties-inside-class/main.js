class Employee {
  name;
  salary;

  showName() {
    console.log(this.name)
  }
  showSalary() {
    console.log(this.salary)
  }
}

let employee = new Employee

employee.name = 'John'
employee.salary = 350

employee.showName()
employee.showSalary()