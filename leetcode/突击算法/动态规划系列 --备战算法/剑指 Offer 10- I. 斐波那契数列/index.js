/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const base = 1000000007

  function dp(n, memo = {}) {
    if (n === 0) return 0
    if (n === 1) return 1

    if (typeof memo[n] !== 'undefined') return memo[n]

    memo[n] = (dp(n - 1, memo) + dp(n - 2, memo)) % base
    return memo[n]
  }
  return dp(n)
}
