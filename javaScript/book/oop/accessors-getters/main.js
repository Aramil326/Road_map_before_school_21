class Employee {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
}

let employee = new Employee('john');
let name = employee.name;
console.log(name);

employee.name = 'eric';
console.log(name);
