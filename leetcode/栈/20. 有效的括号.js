/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = []
  const symbolMap = new Map([['(', ')'], ['{', '}'], ['[', ']']]);

  let i = 0;
  for (; i < s.length; i += 1) {
    const item = s[i]
    if (symbolMap.has(item)) {
      stack.push(item)
    } else {
      const topItem = stack.pop()
      if (symbolMap.get(topItem) !== item) return false
    }
  }

  return stack.length === 0
};
