import $ from 'jquery'
import getCart from './getCart'

export default class ShoppingCart {
  constructor(app) {
    this.$el = $('<div>').css({
      padding: '10px',
      'border-bottom': '1px solid #ccc'
    })
    this.app = app
    this.cart = getCart()
  }

  initBtn() {
    const btn = $('<button>购物车</button>')
    btn.on('click', () => {
      this.showCart()
    })

    this.$el.append(btn)
  }
  showCart() {
    console.log(this.cart.getList())
  }

  render() {
    this.app.$el.append(this.$el)
  }

  init() {
    this.initBtn()
    this.render()
  }
}
