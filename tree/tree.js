class Node {

  constructor(value) {
    this.value = value
    this.parent = null
    this.children = []
  }

  addNode(node) {
    node.parent = this
    this.children.push(node)
    return this
  }

  siblings() {
    return this.parent.children.filter(n => n !== this)
  }
}