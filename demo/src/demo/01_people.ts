interface People {
  name: string
  age: number
  eat(): void
}

class Peoples implements People {
  name: string
  age: number
  protected weight: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.weight = 120
  }

  eat() {
    console.log(`${this.name} eat something`)
  }

  speak() {
    console.log(`my name is ${this.name} ,age ${this.age}`)
  }
}

class Teacher extends Peoples {
  num: number
  private girlFriend: string
  constructor(name: string, age: number, num: number) {
    super(name, age)
    this.num = num
    this.girlFriend = 'xiao hong'
  }

  study() {
    console.log(`${this.name} is studying`)
  }

  getWeight() {
    console.log(this.weight)
  }
}

export { Peoples, Teacher }
