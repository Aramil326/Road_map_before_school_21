class User {
  setName(name) {
    if (this.notEmpty(name)) {
      this.name = name;
    }
  }
  getName() {
    return this.name;
  }

  _notEmpty(str) {
    return str.length > 0;
  }
}
class Employee extends User {
  setSurn(surn) {
    if (this._notEmpty(surn)) {
      this.surn = surn;
    }
  }
  getSurn() {
    return this.surn;
  }
}