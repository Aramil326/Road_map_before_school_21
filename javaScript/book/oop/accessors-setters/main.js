class Employee {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    if (name.length > 0) {
      this.#name = name;
    } else {
      throw new Error('name is incorrect');
    }
  }
}

let employee = new Employee('john');
let name = employee.name;
// employee.name = '';
console.log(name);

