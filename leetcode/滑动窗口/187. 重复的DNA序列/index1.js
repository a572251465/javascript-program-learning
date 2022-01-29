/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let right = 0,
    left = 0,
    l = 10,
    res = ''

  const map = {}
  const result = []

  while (right < s.length) {
    const c = s.charAt(right++)
    res = `${res}${c}`

    while (right - left >= l) {
      map[res] = (map[res] || 0) + 1
      if (map[res] === 2) {
        result.push(res)
      }

      res = res.slice(1)
      left++
    }
  }

  return result
}
