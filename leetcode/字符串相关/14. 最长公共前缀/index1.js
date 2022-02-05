/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const min = Math.min(...strs.map((item) => item.length))

  const isCommonPrefix = (str, strs = []) => {
    return strs.every((item) => item.startsWith(str))
  }

  let start = 0,
    end = min - 1,
    res = ''
  while (start <= end) {
    const mid = (start + (end - start) / 2) | 0,
      values = [...new Set(strs.map((item) => item.charAt(mid)))]

    if (values.length === 1) {
      const result = strs[0].slice(0, mid + 1)
      if (isCommonPrefix(result, strs)) {
        res = result
        start = mid + 1
      } else {
        end = mid - 1
      }
    } else {
      end = mid - 1
    }
  }

  return res
}

console.log(longestCommonPrefix(['babb', 'caa']))
