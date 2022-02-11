/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n

  let first = 0,
    pre = 1,
    cur = 0,
    i = 2
  for (; i <= n; i += 1) {
    cur = pre + first
    first = pre
    pre = cur
  }

  return cur
}
