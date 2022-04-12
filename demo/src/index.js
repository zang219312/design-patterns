// import './demo/02_car'
// import './demo/03_park'
// import './demo/04_factory'
// import './demo/05_single'
// import './demo/05_single2'
// import './demo/06_adaptee'
// import './demo/07_decorator5'
// import './demo/08_proxy2'
// import './demo/09_observe'
// import './demo/10_iterator2'
// import './demo/11_state2'

// 方法调用三次
/* function test(fn) {
  let i = 3
  return (...args) => {
    if (i > 0) {
      i--
      return fn(...args)
    } else {
      return
    }
  }
}

const trans = test(r => {
  console.log('call ', r)
})

for (let i = 0; i < 10; i++) {
  trans(i + 1)
} */

import App from './Test/App'
const app = new App('app')
app.init()
