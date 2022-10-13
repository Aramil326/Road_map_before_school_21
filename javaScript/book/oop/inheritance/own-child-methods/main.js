class User {
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Employee extends User {
  setSalary(salary) {
    this.salary = salary;
  }
  getSalasetSalary() {
    return this.salary;
  }
}

let employee = new Employee();

employee.setName('John');
console.log(employee.getName());

employee.setSalary(1600);
console.log(employee.getSalasetSalary());