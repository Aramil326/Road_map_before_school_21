class Employee {
  name;
  age;
  salary;

  console(name, salary) {
    console.log(name + ' ' + salary)
  }
}

let employee = new Employee

employee.name = 'John'
employee.salary = 350

employee.console(employee.name, employee.salary)