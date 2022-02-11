/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  if (s.length <= 1) return mapping[s]

  let res = 0,
    i = 0
  for (; i < s.length; i += 1) {
    const cur = s[i],
      next = s[i + 1]

    if (cur && next === undefined) {
      res += mapping[cur]
      continue
    }

    if (
      (cur === 'I' && ['V', 'X'].includes(next)) ||
      (cur === 'X' && ['L', 'C'].includes(next)) ||
      (cur === 'C' && ['D', 'M'].includes(next))
    ) {
      const value = mapping[next] - mapping[cur]
      res += value
      ++i
      continue
    }

    res += mapping[cur]
  }

  return res
}

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))