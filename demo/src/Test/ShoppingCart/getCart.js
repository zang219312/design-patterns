class Cart {
  constructor() {
    this.list = []
  }

  add(data) {
    this.list.push(data)
  }

  del(id) {
    this.list = this.list.filter(v => {
      if (v.id === id) {
        return false
      }
      return true
    })
  }

  getList() {
    return this.list.map(v => v.name).join('\n')
  }
}

//返回单例
const getCart = (() => {
  let cart = null
  return () => {
    if (!cart) {
      cart = new Cart()
    }
    return cart
  }
})()

export default getCart
