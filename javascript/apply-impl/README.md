## 实现 apply 方法

1. 下面的代码 尽可能使用 es5 之前的代码来实现

```javascript
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
```

#### 重点解析

```
 1. 为了尽最大的可能性避免key重复，所以采用这种{步骤4}方式。如果是固定key，一定程度上会被覆盖
 2. 一般使用apply函数的话, 直接传递数组所以我们可以直接使用arguments[1]来传递
 3. 使用eval来执行执行函数 最后接受返回值
```
