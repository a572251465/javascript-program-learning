Function.prototype.apply = function () {
  // 1. 获取所有的参数
  const params = Array.from(arguments)
  // 2. 将要被修改的this指向
  const _this = params[0] || (typeof window === 'undefined' ? {} : window)
  // 3. 第二位参数
  const args = params[1]
  // 4. 函数的唯一的key
  const keyName = Symbol('apply')
  // 5. 被调用的函数
  const context = this

  // 6. 函数执行/ 传参/ 删除全局的key
  _this[keyName] = context
  _this[keyName](...args)
  delete _this[keyName]
}

function Person(name, age, a) {
  console.log(this.a, name, age, a)
}

const obj = {
  a: 'test'
}

Person.apply(obj, ['lihh', 27], 1)
