class User {
  setAge(age) {
    if (age >= 0) {
      this.age = age;
    } else {
      throw new Error('need age more 0');
    }
  }
}
class Employee {
  setAge(age) {
    if (age <= 120) {
      super.setAge(age);
    } else {
      throw new Error('need age less 120');
    }
  }
}