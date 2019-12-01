class Node {

  constructor(element) {
    this.element = element
    this.next = null
  }

}

class LinkedList {

  constructor() {
    this.head = null
    this.length = 0
  }

  append(element) {
    const node = new Node(element)

    if (!this.head) {
      this.head = node
      this.length = 1
      return
    }

    let current = this.head
    while(current.next) {
      current = current.next
    }
    current.next = node
    this.length++
  }

  remove(position) {
    if (position == null) {
      position = this.length - 1
    }
    if (position < 0 || position > this.length - 1) {
      console.log('参数越界')
      return
    }

    let node = null
    if (position === 0) {
      node = this.head
      this.head = this.head.next
      this.length--
      return node.element
    }
    let current = this.head,
        index = 0
    while(++index < position) {
      current = current.next
    }
    node = current.next
    current.next = node.next
    this.length--
    return node.element
  }

  toString() {
    let current = this.head,
        str = ''
    while(current) {
      str += ` ${current.element.value || current.element}`
      current = current.next
    }
    return str
  }

}
