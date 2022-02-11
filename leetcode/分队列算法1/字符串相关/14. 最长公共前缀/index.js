/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const minLen = Math.min(...strs.map((item) => item.length))

  let i = 0,
    res = ''
  for (; i < minLen; i += 1) {
    let values = strs.map((item) => item.charAt(i))
    values = [...new Set(values)]
    if (values.length === 1) {
      res += values[0]
    } else {
      return res
    }
  }

  return res
}
