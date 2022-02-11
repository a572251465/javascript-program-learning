/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const result = [],
    arr = t.split('')

  let i = 0
  for (; i < arr.length; i += 1) {
    result.push(arr[i])
    const str = result.join('')
    if (!s.startsWith(str)) {
      result.pop()
    }
  }

  return s === result.join('')
}