class User {
  #name;
  #surn;

  setName(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }

  setSurn(surn) {
    this.#surn = surn;
  }
  getSurn() {
    return this.#surn;
  }
}

class Employee extends User {
  getFull() {
    return this.#name + ' ' + this.#surn;
  }
}

let employee = new Employee();
employee.setName('Alex')
employee.setSurn('Smith')
employee.getFull()//ошибка

console.log(employee.getName() + ' ' + employee.getSurn())