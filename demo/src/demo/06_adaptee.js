// 适配器
class Adaptee {
  specificRequest() {
    return '德国插头'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }

  request() {
    const info = this.adaptee.specificRequest()
    return ` ${info} - 转换 - 中国标准插头`
  }
}

const target = new Target()
const res = target.request()
console.log(res)
