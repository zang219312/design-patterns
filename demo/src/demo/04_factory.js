class Product {
  constructor(name) {
    this.name = name
  }

  init() {
    console.log('init')
  }
  fun1() {
    console.log('fun1')
  }

  fun2() {
    console.log('fun2')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

const creator = new Creator()
console.log(creator)
const p1 = creator.create('p1')
console.log(p1)
p1.init()
p1.fun1()
