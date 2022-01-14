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

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.getName = function () {
  console.log(this.name)
}

const person = new Person('lihh', 20)
const person1 = createFactory(Person, 'lihh', 20)
person.getName()
person1.getName()
