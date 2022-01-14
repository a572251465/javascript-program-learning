/**
 * @author lihh
 * @description 模拟Object.create方法
 * @param proto
 */
const create = function create(proto) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new Error('Object prototype may only be an Object: ' + proto)
  } else if (proto === null) {
    throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
  }
  
  const Fn = function () {}
  Fn.prototype = proto
  return new Fn()
}

console.log(Object.create(null))
console.log({})
