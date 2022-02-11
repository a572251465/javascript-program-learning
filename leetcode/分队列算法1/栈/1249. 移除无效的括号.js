/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  if (s.indexOf(')') === -1 && s.indexOf('(') === -1) return s

  const indexStack = []
  const symbolStack = []
  let i = 0
  for (; i < s.length; i++) {
    const item = s[i]
    if (item === '(') {
      symbolStack.push('(')
      indexStack.push(i)
    }

    if (item === ')') {
      const lastVal = symbolStack[symbolStack.length - 1]
      if (lastVal === '(') {
        indexStack.pop()
        symbolStack.pop()
      } else {
        symbolStack.push(')')
        indexStack.push(i)
      }
    }
  }

  i = indexStack.length - 1
  s = s.split('')
  for (; i >= 0; i--) {
    const index = indexStack[i]
    s.splice(index, 1)
  }
  return s.join('')
}

console.log(minRemoveToMakeValid('lee(t(c)o)de)'))
