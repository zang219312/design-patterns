function readonly(target, name, descriptor) {
  descriptor.writeable = false
  return descriptor
}

class Person {
  constructor() {
    this.firstName = 'A'
    this.lastName = 'B'
  }

  @readonly
  getName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const p = new Person()
console.log(p.getName())

p.getName = function () {
  console.log(1111)
}
