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
    return this.#salary + '$';
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
    if (age > 0 && age < 120) {
      this.#age = age;
    } else {
      throw new Error('age is incorrect');
    }
  }
}