import Item from './Item'

const createDis = data => {
  return new Proxy(data, {
    get(target, key, receiver) {
      if (key === 'name') {
        return `${target[key]} 【折扣】 `
      }

      if (key === 'price') {
        return target[key] * 0.8
      }

      return target[key]
    }
  })
}

// 工厂函数
export default function (list, data) {
  if (data.discount) {
    data = createDis(data)
  }
  return new Item(list, data)
}
