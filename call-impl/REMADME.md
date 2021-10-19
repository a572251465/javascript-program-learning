## 实现 call 方法

1. 下面的代码 尽可能使用 es5 之前的代码来实现

```javascript
Function.prototype.call1 = function (context) {
  // 1. 调用call1的函数
  var self = this
  // 2. 收集的参数
  var params = []
  // 3. 兼容null 如果是null的话 this指向window
  context = context || window
  // 4. 尽最大的可能性避免key重复 从而覆盖
  var funName = 'fn' + +new Date()

  // 5. 收集参数 从下标1开始，因为context就是第一个参数
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
```

#### 重点解析

```
 1. 为了尽最大的可能性避免key重复，所以采用这种{步骤4}方式。如果是固定key，一定程度上会被覆盖
 2. 一般使用call函数的话，可以传递参数，我们就用最原始方式收集arguments参数的方式来
 3. 使用eval来执行执行函数 最后接受返回值
```
