var foo = {
  value: 1
}

function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
  return {
    name,
    age
  }
}

Function.prototype.call1 = function (context) {
  // 1. 修改类型的方法
  var self = this
  // 2. 收集的参数
  var params = []
  // 3. 兼容null 如果是null的话 this指向window
  context = context || window
  // 4. 尽最大的可能性避免key重复 从而覆盖
  var funName = 'fn' + +new Date()

  // 5. 收集参数 从下标1开始
  for (var i = 1; i < arguments.length; i++) {
    params.push('arguments[' + i + ']')
  }

  // 6. 赋值临时属性
  context[funName] = self
  // 7. 通过eval 执行方法
  var result = eval('context[funName](' + params + ')')
  // 8. 删除临时添加的属性
  delete context[funName]
  return result
}

console.log(bar.call1(foo, 'kevin', 18))
/**
kevin
18
1
{ name: 'kevin', age: 18 }
 */
