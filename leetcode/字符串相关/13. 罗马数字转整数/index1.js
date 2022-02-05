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

  let i = 0,
    res = 0
  const len = s.length

  for (; i < len; i += 1) {
    const value = mapping[s[i]]
    if (i < len - 1 && value < mapping[s[[i + 1]]]) {
      res -= value
    } else {
      res += value
    }
  }

  return res
}
