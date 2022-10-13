class User {
  constructor(name, surn) {
    this.name = name;
    this.surn = surn;
  }

  getName() {
    return this.name;
  }
  getSurn() {
    return this.surn;
  }
  #capeFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
}

class Employee extends User {
  constructor(name, surn, age, salary) {
    super(name, surn);
    this.age = age;
    this.salary = salary;
  }

  getSurn() {
    return this.#capeFirst(this.surn); // будет ошибка
  }
  getAge() {
    return this.age;
  }
  getSalary() {
    return this.salary;
  }
}