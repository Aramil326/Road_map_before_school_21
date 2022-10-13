export default class Employee {
  constructor(name, salary, coeffs) {
    this.name = name;
    this.salary = salary;
    this.coeffs = coeffs;
  }

  getTotal() {
    return this.coeffs.reduce((res, coeff) => {
      return res + this.salary * coeff;
    }, 0);
  }
}