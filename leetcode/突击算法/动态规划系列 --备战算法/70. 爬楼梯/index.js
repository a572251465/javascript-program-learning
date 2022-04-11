/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  function dp(n, memo = {}) {
    if (n === 1) return 1
    if (n === 2) return 2

    if (memo[n]) return memo[n]
    memo[n] = dp(n - 2, memo) + dp(n - 1, memo)
    return memo[n]
  }

  return dp(n)
}
