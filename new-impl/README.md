## new 过程中实现原理

```javascript
function createFactory() {
  // 1. 通过shift函数剪切掉数组最后一位 同时修改了arguments的长度
  const self = [].shift.call(arguments)
  // 2. 定义返回对象
  const obj = {}

  // 3. 执行需要new的函数 将this指向指向新对象
  const result = self.apply(obj, arguments)
  // 4. 赋值原型链上的属性 使用api Object.create函数
  obj.__proto__ = Object.create(self.prototype)
  /**
   * function Fn() {}
   * Fn.prototype = self.prototype
   * obj.__proto__ = new Fn
   */

  // 5. 如果返回值是对象，返回对象，反之返回定义的对象
  return result && typeof result === 'object' ? result : obj
}
```

## 分析

```
  1. new实现过程有两个要点：修改this指向，赋值prototype属性
  2. 可以通过call/ apply将this指向新对象
  3. prototype上的属性以及方法，可以通过原型链来查找，可以参照实例中两种办法
```

## 注意点

```
  1. 关于new的this指向一般都是指向实例对象
  2. 但是如果构造函数中返回的值是对象的话，那么this就指向返回的对象
```

## 普通函数 以及构造不同

```
  1. 都可以通过new来执行 也可以通过函数调用来执行
  2. 函数调用时this的来源取决于调用方式/ 构造函数是 实例本身或是返回对象
  3. 执行流程不同
  4. 返回值不同 普通函数没有返回值的话，直接就是undefined。 构造函数返回的是实例本身
```
