Function.prototype.call = function () {
  // 1. 获取参数
  const params = Array.from(arguments)
  // 2. 获取该的this的实例
  const _self = params[0] || (typeof window === 'undefined' ? {} : window)
  // 3. 分割出第二位以后的参数
  const args = params.slice(1)
  // 4. 调用的函数
  const context = this
  // 5. 为了避免key 重复，使用Symbol，执行方法名唯一
  const keyName = Symbol('call')

  // 6. 执行函数后 删除全局上的方法
  _self[keyName] = context
  _self[keyName](...args)
  delete _self[keyName]
}

function Person(name, age) {
  console.log(this.a, name, age)
}

const obj = {
  a: 'test'
}

Person.call(null, 'lihh', 27)
