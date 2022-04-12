class Iterator {
  constructor(container) {
    console.log('🚀 ~  container', container)
    this.lists = container.list
    this.index = 0
  }

  next() {
    if (this.hasNext()) {
      return this.lists[this.index++]
    }

    return null
  }

  hasNext() {
    return this.index < this.lists.length
  }
}

class Container {
  constructor(list) {
    this.list = list
  }

  getIterator() {
    return new Iterator(this)
  }
}

const arr = [1, 2, 3, 4, 5, 6]
const container = new Container(arr)
const iterator = container.getIterator()
while (iterator.hasNext()) {
  console.log(iterator.next())
}
