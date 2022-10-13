class User {
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Employee extends User {

}

let employee = new Employee();

employee.setName('John');
console.log(employee.getName());