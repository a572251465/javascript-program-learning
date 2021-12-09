/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  if (s === t) return true

  const handle = (str) => {
    const stack = []
    let i = 0
    for (; i < str.length; i++) {
      const item = str[i]
      if (item === '#' && stack.length > 0) {
        stack.pop()
      }
      if (item !== '#') {
        stack.push(item)
      }
    }
    return stack.join('')
  }

  return handle(s) === handle(t)
}
