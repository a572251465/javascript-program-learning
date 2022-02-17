/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''

  let res = '',
    i = 0
  const min = Math.min(...strs.map((item) => item.length))

  while (i < min) {
    const item = [...new Set(strs.map((item) => item.charAt(i)))]
    if (item.length !== 1) return res
    res = `${res}${item[0]}`
    i++
  }

  return res
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
