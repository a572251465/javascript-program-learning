## 分析 bind 实现过程

```javascript
Function.prototype.bind1 = function (context) {
  var self = this
  // 1. 收集第一次调用的参数
  var args = Array.prototype.slice.call(arguments, 1)

  // 2. 定义方法为了中转
  var Fn = function () {}
  // 3. 定义返回的函数
  var ReturnFun = function () {
    // 4. 收集第二次调用函数的参数
    const params = Array.prototype.slice.call(arguments)
    // 5. 执行代码 确定this指向 传递参数 （如果是通过new执行的话 this跟函数属于隶属关系）
    return self.apply(this instanceof ReturnFun ? this : context, args.concat(params))
  }

  // 6. 方法1 过度prototype属性/ 方法
  Fn.prototype = self.prototype
  ReturnFun.prototype = new Fn()

  // 方法2 通过Object.create 来过度
  // ReturnFun.prototype = Object.create(self.prototype)
  return ReturnFun
}
```

### 分析

```
  1. 实现bind有两个特征：返回一个函数 && 返回的函数还可以通过new执行
  2. 需要收集参数，最后进行合并
  3. 如果是不同的调用方式，this指向不同。如果是通过new来执行的话，this就是函数的this，反之就是传递的对象上下文
  4. 在对prototype赋值的过程中，为了避免引用赋值，通过new来转换实现(查看步骤6)，或是通过Object.create()来实现也行
```
