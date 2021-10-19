var foo = {
  value: 1
}

function bar([name, age]) {
  console.log(name)
  console.log(age)
  console.log(this.value)
  return {
    name,
    age
  }
}

Function.prototype.apply1 = function (context) {
  // 0. 判断是否有参数
  if (arguments[1] && !Array.isArray(arguments[1])) throw TypeError('CreateListFromArrayLike called on non-object')

  // 1. 修改类型的方法
  var self = this
  // 2. 兼容null 如果是null的话 this指向window
  context = context || window
  // 3. 尽最大的可能性避免key重复 从而覆盖
  var funName = 'fn' + +new Date()

  // 4. 赋值临时属性
  context[funName] = self
  // 5. 通过eval 执行方法 因为apply只能传递数组，所以传递是arguments[1]
  var result = arguments[1] ? eval('context[funName](arguments[1])') : context[funName]()
  // 6. 删除临时添加的属性
  delete context[funName]
  return result
}

console.log(bar.apply1(foo, ['lihh', 18]))
/**
kevin
18
1
{ name: 'kevin', age: 18 }
 */
