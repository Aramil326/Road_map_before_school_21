class Employee {
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

let employee = new Employee('john', 1000, [1.1, 1.2, 1.3]);
console.log(employee.getTotal);