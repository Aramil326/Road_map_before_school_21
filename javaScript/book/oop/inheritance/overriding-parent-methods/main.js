class User {
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setAge(age) {
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}

class Employee extends User {
  setSalary(salary) {
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }

  setAge(age) {
    if (age >= 18 && age < 65) {
      this.age = age;
    } else {
      throw new Error('age is incorrect');
    }
  }
}

let employee = new Employee();

employee.setName('John');
console.log(employee.getName());

employee.setSalary(1600);
console.log(employee.getSalary());

employee.setAge(19);
console.log(employee.getAge());