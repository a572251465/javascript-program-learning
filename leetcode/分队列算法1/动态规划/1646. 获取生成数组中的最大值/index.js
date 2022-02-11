/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n <= 1) return n

  const arr = new Array(n + 1)
  arr[0] = 0
  arr[1] = 1

  let i = 2
  for (; i <= n; i += 1) {
    arr[i] = !!(i & 1) ? arr[(i / 2) | 0] + arr[((i / 2) | 0) + 1] : arr[i / 2]
  }

  return Math.max(...arr)
}
