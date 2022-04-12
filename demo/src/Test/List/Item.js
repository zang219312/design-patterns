import $ from 'jquery'
import getCart from '../ShoppingCart/getCart'
import StateMachine from 'javascript-state-machine'
import { log } from '../utils/log'
export default class Item {
  constructor(list, data) {
    this.list = list
    this.data = data
    this.$el = $('<div>')
    this.cart = getCart()
  }

  initContent() {
    const $el = this.$el
    const data = this.data
    $el.append($(`<p>名称：${data.name}</p>`))
    $el.append($(`<p>名称：${data.price}</p>`))
  }

  initBtn() {
    const $el = this.$el
    const btn = $('<button>test</button>')
    const that = this
    const fsm = new StateMachine({
      init: '加入购物车',
      transitions: [
        { name: 'addToCart', from: '加入购物车', to: '从购物车删除' },
        { name: 'delFromCart', from: '从购物车删除', to: '加入购物车' }
      ],

      methods: {
        onAddToCart() {
          that.addToCart()
          updateText()
        },
        onDelFromCart() {
          that.delFromCart()
          updateText()
        }
      }
    })

    const updateText = () => btn.text(fsm.state)

    btn.on('click', () => {
      if (fsm.is('加入购物车')) {
        fsm.addToCart()
      } else {
        fsm.delFromCart()
      }
    })

    updateText()
    $el.append(btn)
  }

  @log('add')
  addToCart() {
    this.cart.add(this.data)
  }

  @log('del')
  delFromCart() {
    this.cart.del(this.data.id)
  }

  render() {
    this.list.$el.append(this.$el)
  }

  init() {
    this.initContent()
    this.initBtn()
    this.render()
  }
}
