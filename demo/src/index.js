class Person {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

const person = new Person('JAVA')
console.log(person.getName())
