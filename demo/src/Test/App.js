import $ from 'jquery'
import List from './List'
import ShoppingCart from './ShoppingCart'
export default class App {
  constructor(id) {
    this.$el = $('#' + id)
  }

  initShoppingCart() {
    const shop = new ShoppingCart(this)
    shop.init()
  }

  initList() {
    const list = new List(this)
    list.init()
  }

  init() {
    this.initList()
    this.initShoppingCart()
  }
}
