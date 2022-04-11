/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const base = 1000000007

  let pre1 = 0
  let pre2 = 1
  let i = 2
  let cur
  if (n <= 1) cur = n

  for (; i <= n; i += 1) {
    cur = (pre1 + pre2) % base
    ;[pre2, pre1] = [cur, pre2]
  }
  return cur
}
