class User {
  _name;

  setName(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
}

class Employee extends User {
  setName(name) {
    if (name.length > 0) {
      this._name = name;
    }
  }
}

let employee = new Employee();

employee.setName('John');
console.log(employee.getName('John'))