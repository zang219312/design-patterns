class LoginForm {
  constructor() {
    this.state = 'hide'
  }

  show() {
    if (this.state === 'show') {
      console.log('已经显示')
      return
    }
    this.state = 'show'
    console.log('登录框已显示')
  }

  hide() {
    if (this.state === 'hide') {
      console.log('已经隐藏')
      return
    }
    this.state = 'hide'
    console.log('登录框已隐藏')
  }
}
LoginForm.getInstance = (() => {
  let instance
  return () => {
    if (!instance) {
      instance = new LoginForm()
    }
    return instance
  }
})()

const log1 = LoginForm.getInstance()
log1.show()

const log2 = LoginForm.getInstance()
log2.show()
console.log(log1 === log2)
