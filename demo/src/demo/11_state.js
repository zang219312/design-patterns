class State {
  constructor(color) {
    this.color = color
  }

  handle(context) {
    context.setState(this.color)
  }
}

class Context {
  constructor() {
    this.state = null
  }
  getState() {
    return this.state
  }

  setState(state) {
    this.state = state
  }
}

const ctx = new Context()
const red = new State('red')
const yellow = new State('yellow')
const green = new State('green')
red.handle(ctx)
console.log(ctx.getState())

yellow.handle(ctx)
console.log(ctx.getState())

green.handle(ctx)
console.log(ctx.getState())
