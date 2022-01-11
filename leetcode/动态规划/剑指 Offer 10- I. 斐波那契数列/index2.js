/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n

  const dp = new Array(n + 1)
  dp[0] = 0
  dp[1] = 1

  let i = 2
  for (; i <= n; i += 1) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }
  return dp[n]
}
