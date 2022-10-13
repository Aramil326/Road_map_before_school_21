class Employee {
  constructor(name, salary, age) {
    this.#name = name;
    this.#salary = salary;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }
  getSalary() {
    return this.#salary;
  }
  getAge() {
    return this.#age;
  }

  setName(name) {
    this.#name = name;
  }
  setSalary(salary) {
    this.#salary = salary;
  }
  setAge(age) {
    this.#age = age;
  }
}