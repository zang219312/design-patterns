class ReadImg {
  constructor(fileName) {
    this.fileName = fileName
    this.loadFromDisk()
  }

  display() {
    console.log('display ..', this.fileName)
  }
  loadFromDisk() {
    console.log('loadFromDisk .. ', this.fileName)
  }
}

class ProxyImg {
  constructor(fileName) {
    this.realImg = new ReadImg(fileName)
  }

  display() {
    this.realImg.display()
  }
}

const proxyImg = new ProxyImg('1.png')
proxyImg.display()
