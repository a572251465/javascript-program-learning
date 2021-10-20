/**
 *
 * @description bind方法特征：会返回一个函数 && 返回函数可以直接执行 或是 通过new执行
 * @param {*} context
 * @returns
 */

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

var foo = {
  value: 1
}
function bar(name, age) {
  this.habit = 'shopping'
  console.log(`value=${this.value}; name=${name}; age=${age}`)
}
bar.prototype.friend = 'kevin'
var bindFoo = bar.bind(foo, 'daisy')
bindFoo('111')
var obj = new bindFoo('18')
console.log(obj.habit)
console.log(obj.friend)
