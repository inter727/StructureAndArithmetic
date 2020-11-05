class Stack {

  constructor() {
    this.queue1 = []
    this.queue2 = []
  }

  push(val) {
    this.queue1.push(val)
  }

  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift())
    }
    let temp = this.queue1
    this.queue1 = this.queue2
    this.queue2 = temp
    return this.queue2.shift()
  }

}

class Stack1 {

  constructor() {
    this.queue1 = []
    this.queue2 = []
  }

  push(val) {
    if (!this.queue1.length) {
      this.queue1.push(val)
      while (this.queue2.length) {
        this.queue1.push(this.queue2.shift())
      }
    } else {
      this.queue2.push(val)
      while (this.queue1.length) {
        this.queue2.push(this.queue1.shift())
      }
    }
  }

  pop() {
    return this.queue1.length ? this.queue1.shift() : this.queue2.shift()
  }

}