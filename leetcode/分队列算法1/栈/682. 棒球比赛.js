/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = []

  const strategy = {
    C: () => stack.pop(),
    D: () => {
      const lastVal = stack[stack.length - 1]
      stack.push(lastVal * 2)
    },
    '+': () => {
      const last = stack[stack.length - 1]
      const pre = stack[stack.length - 2]
      stack.push(last + pre)
    }
  }

  let i = 0
  for (; i < ops.length; i++) {
    const item = ops[i]
    if (strategy[item]) {
      strategy[item]()
    } else {
      stack.push(+item)
    }
  }

  return stack.reduce((pre, cur) => pre + cur)
}
