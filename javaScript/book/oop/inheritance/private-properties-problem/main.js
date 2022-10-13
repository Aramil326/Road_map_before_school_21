class User {
  #name;

  setName(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
}

class Employee extends User {
  setNameWithCorrectLength(name) {
    if (name.length > 0) {
      this.setName(name)
    }
  }
}

let employee = new Employee();

employee.setNameWithCorrectLength('John');
console.log(employee.getName())