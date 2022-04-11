/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n

  let pre1 = 1
  let pre2 = 2
  let cur
  let i = 2

  for (; i < n; i += 1) {
    cur = pre1 + pre2
    ;[pre2, pre1] = [cur, pre2]
  }

  return cur
}
