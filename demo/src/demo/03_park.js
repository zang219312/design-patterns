class Car {
  constructor(num) {
    this.num = num
  }
}

class Camera {
  shot(car) {
    return {
      num: car.num,
      inTime: Date.now()
    }
  }
}

class Screen {
  show(car, inTime) {
    console.log(`车牌号：${car}，停车时间：${Date.now() - inTime}`)
  }
}

class Park {
  constructor(floors) {
    this.floors = floors || []
    this.camera = new Camera()
    this.screen = new Screen()
    this.carList = {}
  }

  emptyNum() {
    return this.floors
      .map(v => {
        return `第${v.index}层还有${v.emptyPlaceNum()}个车位`
      })
      .join('\n')
  }

  in(car) {
    // 车辆驶入时先拍照
    const info = this.camera.shot(car)
    // 停到某个车位
    const i = parseInt((Math.random() * 100) % 100)
    const place = this.floors[0].places[i]
    // 停进去了
    place.in()
    info.place = place
    info.i = i
    // 记录信息
    this.carList[car.num] = info
  }

  out(car) {
    // 获取信息
    const info = this.carList[car.num]
    // 将停车位清空
    info.place.out()
    // 显示时间
    this.screen.show(car.num, info.inTime)

    // 清空记录
    delete this.carList[car.num]
  }
}

class Floor {
  constructor(index, places) {
    this.index = index
    this.places = places || []
  }

  emptyPlaceNum() {
    return this.places.reduce((acr, val) => {
      if (val.empty) {
        acr += 1
      }
      return acr
    }, 0)
  }
}

class Place {
  constructor() {
    this.empty = true
  }

  in() {
    this.empty = false
  }

  out() {
    this.empty = true
  }
}

const floors = []
for (let i = 0; i < 3; i++) {
  const places = []
  for (let j = 0; j < 100; j++) {
    places[j] = new Place()
  }
  floors[i] = new Floor(i + 1, places)
}

const park = new Park(floors)
console.log('🚀 ~  park', park)

const car1 = new Car('浙A')
const car2 = new Car('鄂A')
const car3 = new Car('苏A')

// 车辆驶入
console.log('第一辆车进入')
console.log(park.emptyNum())
park.in(car1)

console.log('第二辆车进入')
console.log(park.emptyNum())
park.in(car2)

console.log('第一辆车离开')
setTimeout(() => {
  park.out(car1)
}, 300)
console.log('第二辆车离开')
setTimeout(() => {
  park.out(car2)
}, 500)

console.log('第三辆车进入')
console.log(park.emptyNum())
park.in(car3)

console.log('第三辆车离开')
setTimeout(() => {
  park.out(car3)
}, 800)
