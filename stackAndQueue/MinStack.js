class MinStack {

  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(val) {
    this.stack.push(val)
    const min = this.min()
    if (!this.minStack.length || val < min) {
      this.minStack.push(val)
    } else {
      this.minStack.push(min)
    }
  }

  pop() {
    this.minStack.pop()
    return this.stack.pop()
  }

  min() {
    const length = this.minStack.length
    return length ? this.minStack[length - 1] : null
  }

}