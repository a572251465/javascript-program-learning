Object.prototype[Symbol.iterator] = function () {
  const _this = this
  const len = Object.keys(_this).length
  const keys = Object.keys(_this)
  let i = 0

  return {
    next() {
      return {
        value: _this[keys[i]],
        done: i++ >= len
      }
    }
  }
}

const user = {
  name: 'lihh',
  age: 20,
  address: 'XXX'
}

const it = user[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
