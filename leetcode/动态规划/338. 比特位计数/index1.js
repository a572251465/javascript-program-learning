/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = []
  result[0] = 0

  let i = 1
  for (; i <= n; i += 1) {
    if (i & 1) {
      result[i] = result[i - 1] + 1
    } else {
      result[i] = result[i / 2]
    }
  }

  return result
}
