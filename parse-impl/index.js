/**
 * @author lihh
 * @description 实现parse函数，可以访问对象中的属性
 * @param {*} obj 被调用对象
 * @param {*} str 获取内容的字段
 * @returns
 */
function parse(obj, str) {
  // 1. 将访问的[0]等转换为.的形式
  str = str.replace(/\[(\d+)\]/gi, '.$1')
  // 2. 访问的属性都按点进行分割
  const arr = str.split('.')
  // 3. 依次获取对象属性
  arr.forEach((item) => {
    obj = obj[item]
  })
  return obj
}

/**
 * @author lihh
 * @description 实现parse函数，可以访问对象中的属性 -- 直接转换为括号取值
 * @param {*} obj 被调用对象
 * @param {*} str 获取内容的字段
 * @returns
 */
function parse(obj, str) {
  // 这个直接将通过点进行调用的方式，直接修改为[]这种方式 不过用到了new Function
  return new Function('obj', `return obj.${str.replace(/\.(\d+)/gi, '[$1]')}`)(obj)
}

// --------- 测试用例 ---------------------
const obj = { a: 1, b: { c: 2 }, d: [1, 2, 3], e: [{ f: [4, 5, 6] }] }
const r1 = parse(obj, 'a') // = 1;
console.log(r1)
const r2 = parse(obj, 'b.c') // = 2;
console.log(r2)
const r3 = parse(obj, 'd[2]') // = 3;
console.log(r3)
const r4 = parse(obj, 'e[0].f[0]') // = 4;
console.log(r4)
