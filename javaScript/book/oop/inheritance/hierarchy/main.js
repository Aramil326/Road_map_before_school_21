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

class Programmer extends Employee {
  setAge(age) {
    this.age = age;
  }
}

class Designer extends Employee {
  setCity(city) {
    this.city = city;
  }
}