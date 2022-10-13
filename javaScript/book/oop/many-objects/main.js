class Employee {
  name;
  age;
  salary;
}

let employee1 = new Employee
let employee2 = new Employee

employee1.name = 'John'
employee1.salary = 352

employee2.name = 'Alex'
employee2.salary = 270

console.log(employee1.salary + employee2.salary)