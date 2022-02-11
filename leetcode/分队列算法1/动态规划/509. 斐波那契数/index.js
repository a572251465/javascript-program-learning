/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, memo = {}) {
  if (n <= 1) return n
  if (memo[n]) return memo[n]

  memo[n] = fib(n - 1) + fib(n - 2)
  return memo[n]
}
