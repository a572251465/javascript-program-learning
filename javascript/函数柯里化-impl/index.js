/**
 * @author lihh
 * @description 实现函数的柯里化
 */

/**
 * @description 思路
 * 1. 每次都是会直接返回一个函数
 * 2. 重新函数的属性toString, 用来显示打印
 * @param  {...any} args
 * @returns
 */
const add = function add(...args) {
  let sum = []
  const fn = function (...param) {
    sum = sum.concat(param)
    return fn
  }
  fn.toString = function () {
    sum = sum.concat(args)
    return sum.reduce((pre, cur) => pre + cur)
  }
  return fn
}
console.log(add(1)(2, 3, 4)(5, 6)(4, 9)(10))
