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

  //尾部追加元素
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

  //删除指定位置的元素
  remove(position = this.length - 1) {
    if (position < 0 || position >= this.length) {
      console.log('参数越界')
      return
    }

    let current = this.head, previous = null, index = 0
    while(index++ < position) {
      previous = current
      current = current.next
    }
    if (previous) {
      previous.next = current.next
    } else {
      this.head = current.next
    }
    this.length--
    return current.element
  }

  //删除目标元素
  removeTarget(element) {
    let current = this.head, previous = null
    while(current && current.element !== element) {
      previous = current
      current = current.next
    }
    if (!current) {return false}
    if (previous) {
      previous.next = current.next
    } else {
      this.head = current.next
    }
    this.length--
    return true
  }

  //在指定位置后面插入元素
  insert(position, element) {
    if (position < 0 || position >= this.length) {
      console.log('参数越界')
      return false
    }

    let current = this.head, index = 0
    while(index++ < position) {
      current = current.next
    }
    const node = new Node(element)
    let next = current.next
    current.next = node
    node.next = next
    this.length++
    return true
  }

  //获取链表指定位置的元素
  getElement(position) {
    if (position < 0 || position >= this.length) {return null}

    let current = this.head, i = 0
    while (i++ !== position) {
      current = current.next
    }
    return current.element
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
