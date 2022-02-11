/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.length = k
  this.head = -1
  this.tail = -1
  this.size = 0
  this.stack = []
}

/**
 * @param {number} value
 * @return {boolean}
 */
// [1,2,3,4,5]
MyCircularQueue.prototype.enQueue = function (value) {
  // 判断是否已经满了
  if (this.isFull()) return false

  // 判断是否需要循环
  if (this.tail + 1 === this.length) {
    this.tail = 0
  } else {
    this.tail += 1
  }

  this.size += 1
  this.stack[this.tail] = value
  if (this.head === -1) this.head += 1
  return true
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false

  // 判断是否循环删除
  if (this.head + 1 === this.length) {
    this.head = 0
  } else {
    this.head += 1
  }
  this.size -= 1
  return true
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.size === 0) return -1

  return this.stack[this.head]
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.size === 0) return -1
  return this.stack[this.tail]
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size > 0 && this.size === this.length
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

const keyNames = [
  'MyCircularQueue',
  'enQueue',
  'enQueue',
  'enQueue',
  'enQueue',
  'Rear',
  'isFull',
  'deQueue',
  'enQueue',
  'Rear'
]
const vals = [[3], [1], [2], [3], [4], [], [], [], [4], []]

let instance
for (let i = 0; i < keyNames.length; i++) {
  const name = keyNames[i]
  const val = vals[i]
  if (name === 'MyCircularQueue') {
    instance = new MyCircularQueue(val[0])
    console.log(null)
  } else {
    console.log(instance[name](val[0]))
  }
}
