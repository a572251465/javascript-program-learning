function EventEmitter() {
  this.pool = {}
}

EventEmitter.prototype.on = function (name, fn) {
  if (!this.pool) this.pool = {}
  const stack = this.pool[name] || (this.pool[name] = [])
  if (stack.includes(fn)) return false

  stack.push(fn)
  return true
}

EventEmitter.prototype.emit = function (name) {
  const stack = this.pool[name]
  if (!stack || !Array.isArray(stack)) return false

  const args = [].slice.call(arguments, 1)
  stack.forEach((fn) => fn(...args))
  return true
}

EventEmitter.prototype.off = function (name, fn) {
  const stack = this.pool[name]
  if (!stack) return false

  if (fn) {
    this.pool[name] = stack.filter((item) => item !== fn && item.l !== fn)
    return true
  }
  this.pool[name] = []
  return true
}

EventEmitter.prototype.once = function (name, fn) {
  const handle = (...args) => {
    fn(...args)
    this.off(name, fn)
  }
  handle.l = fn
  this.on(name, handle)
}

// ---------------------- 测试用例 ------------------------------
const cry = () => console.log('我会哭')
const laugh = () => console.log('我会笑')
const eat = () => console.log('我会吃')

const event = new EventEmitter()
event.on('handle', cry)
event.on('handle', laugh)
event.once('handle', eat)
event.emit('handle')
event.off('handle', cry)
event.emit('handle')
