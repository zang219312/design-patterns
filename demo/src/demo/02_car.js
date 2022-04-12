class Car {
  constructor(number, name) {
    this.number = number
    this.name = name
  }
}

class Kuaiche extends Car {
  constructor(number, name) {
    super(number, name)
    this.price = 1
  }
}

class Zhuanche extends Car {
  constructor(number, name) {
    super(number, name)
    this.price = 2
  }
}
class Trip {
  constructor(car) {
    this.car = car
  }

  start() {
    console.log(`trip start 车牌号${this.car.Number},车名 ${this.car.name}`)
  }
  end() {
    console.log(`trip end , 打车费：${this.car.price * 5}`)
  }
}

const kuaiche = new Kuaiche(100, '桑塔纳')
const trip = new Trip(kuaiche)
trip.start()
trip.end()
