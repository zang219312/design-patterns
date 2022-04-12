function log(target, name, descriptor) {
  const oldValue = descriptor.value
  descriptor.value = function () {
    console.log(`calling ${name} void with `, arguments)
    return oldValue.apply(this, arguments)
  }
  return descriptor
}
class Math {
  @log
  add(a, b) {
    return a + b
  }
}

const m = new Math()
const res = m.add(2, 4)
console.log(res) // 6
