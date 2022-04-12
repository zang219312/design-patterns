function each(data) {
  /* const iterator = data[Symbol.iterator]()

  let item = { done: false }
  while (!item.done) {
    item = iterator.next()
    if (!item.done) {
      console.log(item.value)
    }
  } */
  // data 带有遍历器特性的对象
  for (const iterator of data) {
    console.log(iterator)
  }
}
const arr = [1, 2, 4]
const nodeList = document.getElementsByTagName('h2')
const map = new Map()
map.set('a', 100)
map.set('b', 102)

each(arr)
each(nodeList)
each(map)
