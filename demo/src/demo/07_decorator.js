@testDec
class Circle {
  draw() {
    console.log('画一个圆形')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }

  draw() {
    this.circle.draw()
    this.setRedBorder()
  }

  setRedBorder() {
    console.log('设置红色边框')
  }
}

const cir = new Circle()
cir.draw()

console.log('----------')
const dec = new Decorator(cir)
dec.draw()

function testDec(target) {
  target.isDec = true
}

console.log(Circle.isDec)
