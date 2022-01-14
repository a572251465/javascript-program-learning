// 实现迭代器部分 Symbol.iterator 函数
Object.prototype[Symbol.iterator] = function () {
  const self = this
  const keys = Object.keys(self)
  let i = 0

  return {
    next() {
      return {
        value: self[keys[i]],
        done: i++ >= keys.length
      }
    }
  }
}

const arr = [1, 2, 3, 4]
const obj = {
  name: 'lihh'
}

// 实现for of的逻辑部分
function forOfImpl(content, cb) {
  if (!(Symbol.iterator in content)) throw new Error(`content is not iterator`)
  if (typeof cb !== 'function') throw new Error(`cb be is a function`)
  const iterator = content[Symbol.iterator]()

  let result = iterator.next()
  while (true) {
    if (result.done) return
    cb(result.value)
    result = iterator.next()
  }
}

forOfImpl(obj, function (item) {
  console.log(item)
})
