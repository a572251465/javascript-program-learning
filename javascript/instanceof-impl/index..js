// 函数getPrototypeOf 获取原型对象 === instance.__proto__
/**
 * @description 沿着原型链找 如果构造函数的原型 出现在实例的原型链上，就是所属实例
 * @param {*} instance 实例
 * @param {*} Constructor 构造函数
 * @returns
 */
function instanceOf(instance, Constructor) {
  // 1. 如果instance 是null || 不是对象的时候 直接跳过
  if (!instance || typeof instance !== 'object') return false

  // 判断hasInstance是否存在
  if (Function.prototype[Symbol.hasInstance]) {
    return Function.prototype[Symbol.hasInstance].call(Constructor, instance)
  }

  let proto = Object.getPrototypeOf(instance)
  // 2. 如果原型链直接是null 直接返回
  if (proto === null) return false
  // 3. 获取构造函数的prototype
  const prototype = Constructor.prototype
  // 4. 判断是否在原型链上
  while (proto !== prototype) {
    // 5. 如果已经找到Object.prototype.__proto__ 说明无法向上查找 直接返回false
    if (proto === null) return false
    // 6. 赋值迭代
    proto = Object.getPrototypeOf(proto)
  }

  return true
}

function Person() {}
function Person1() {}
const person = new Person()
console.log(person instanceof Person)
console.log(instanceOf(person, Person))
