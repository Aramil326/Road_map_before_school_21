class Employee {
  #name
  #salary
  #age

  constructor(name, salary, age) {
    this.#name = name;
    this.#salary = salary;
    this.#age = age;
  }

  show() {
    console.log(this.#name);
    console.log(this.#salary);
    console.log(this.#age);
  }
}

let employee = new Employee('John', 15000, 25)

employee.show()