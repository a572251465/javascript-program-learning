class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  push(value) {
    const node = new Node(value)

    if (this.head === null) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node

    this.size++
  }

  getPrevNode() {
    if (this.isEmpty()) return null

    let curr = this.head
    while (curr.next && curr.next.next) curr = curr.next
    return curr
  }

  pop() {
    if (this.isEmpty()) return

    if (this.head.next === null) {
      this.head = this.tail = null
    } else {
      const prevNode = this.getPrevNode()
      prevNode.next = null
      this.tail = prevNode
    }

    this.size--
  }
}
