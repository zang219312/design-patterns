class SingleObj {
  login() {
    console.log('login')
  }
}

SingleObj.getInstance = (function () {
  let instance
  return () => {
    if (!instance) {
      instance = new SingleObj()
    }

    return instance
  }
})()
const log1 = SingleObj.getInstance()
log1.login()
const log2 = SingleObj.getInstance()
log2.login()

console.log('log1 === log2', log1 === log2)

const log3 = new SingleObj()
log3.login()

console.log('log1 === log3', log1 === log3)
