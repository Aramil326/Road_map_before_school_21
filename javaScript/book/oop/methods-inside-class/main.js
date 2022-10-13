class Student {
  name;
  surn;

  cape(str) {
    return str[0].toUpperCase()
  }

  show() {
    console.log(this.cape(this.name) + '. ' + this.cape(this.surn))
  }
}

let student = new Student;

student.name = 'John'
student.surn = 'Smith'

student.show()