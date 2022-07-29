class Stack {
  constructor() {
    this.stack = []
    this.size = 0
  }

  push(value) {
    this.stack.push(value)
    this.size += 1
  }

  pop() {
    if (this.isEmpty()) return false

    this.size -= 1
    return this.stack.pop()
  }

  peek() {
    if (this.isEmpty()) return false

    return this.stack[this.size - 1]
  }

  isEmpty() {
    return this.size === 0
  }
}
