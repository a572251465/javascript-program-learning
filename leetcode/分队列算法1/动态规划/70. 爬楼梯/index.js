/**
 * @param {number} n
 * @param memo
 * @return {number}
 */
const climbStairs = function (n, memo = {}) {
  // base
  if (n <= 2) return n
  if (memo[n]) return memo[n]

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
  return memo[n]
}
