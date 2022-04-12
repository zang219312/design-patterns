const star = {
  name: '艺人',
  age: 33,
  phone: '136xxxxxxxx'
}

const agent = new Proxy(star, {
  get(target, key) {
    if (key === 'phone') {
      return '_agent: 16899997777'
    }
    if (key === 'price') {
      return 120000
    }
    return target[key]
  },
  set(target, key, value) {
    if (key === 'customPrice') {
      if (value < 100000) {
        throw new Error('价格太低')
      } else {
        target[key] = value
        return true
      }
    }
  }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)
try {
  agent.customPrice = 90000
} catch (error) {
  console.log(error)
}

console.log('agent.customPrice ', agent)
