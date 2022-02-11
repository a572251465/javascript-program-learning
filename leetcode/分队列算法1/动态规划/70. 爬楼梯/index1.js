/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, memo = {}) {
  // base
  if (n <= 2) return n
  const dp = new Array(n + 1)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2

  let i = 3
  for (; i < dp.length; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}
