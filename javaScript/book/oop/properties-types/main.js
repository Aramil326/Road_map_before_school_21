class Employee {
  get name() {
    console.log('get');
  }
  set name() {
    console.log('set');
  }
}

user.name = 'john';
let name = user.name;

console.log(name)