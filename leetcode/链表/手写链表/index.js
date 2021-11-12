class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  add(val) {
    const node = new Node(val, null)
    if (!this.head) {
      this.head = node
      this.size++
      return
    }

    const preNode = this.get(this.size)
    preNode.next = node
    this.size++
  }

  get(index) {
    let curr = this.head
    for (let i = 0; i < index - 1; i += 1) {
      curr = curr.next
    }

    return curr
  }

  print() {
    return this.head
  }

  reversal() {
    /**
     * @description 1 2 3 4
     * @param {*} head
     * @returns
     */
    function reversal(head) {
      if (!head || !head.next) return head
      let newHead = reversal(head.next)
      head.next.next = head
      head.next = null
      return newHead
    }
    return reversal(this.head)
  }

  reversal1() {
    function reversal1(head) {
      if (!head || !head.next) return head
      let newHead = head.next
      head.next = reversal1(newHead.next)
      newHead.next = head
      return newHead
    }
    return reversal1(this.head)
  }
}

module.exports = {
  LinkedList
}
