import $ from 'jquery'
import { GET_LIST } from '../config'
import createItem from './CreateItem'
export default class List {
  constructor(app) {
    this.app = app
    this.$el = $('<div>')
  }

  init() {
    this.loadData()
      .then(res => {
        this.initItemList(res)
      })
      .then(() => {
        this.render()
      })
  }

  async loadData() {
    const data = await fetch(GET_LIST)
    return data.json()
  }

  initItemList(data) {
    data.forEach(v => {
      const item = createItem(this, v)
      item.init()
    })
  }

  render() {
    this.app.$el.append(this.$el)
  }
}
