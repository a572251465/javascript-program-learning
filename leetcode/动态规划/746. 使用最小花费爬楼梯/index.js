/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  function dp(i, memo = {}) {
    if (i >= cost.length) return 0
    if (memo[i]) return memo[i]

    const step1 = dp(i + 1)
    const step2 = dp(i + 2)
    const money = cost[i]
    return (memo[i] = Math.min(step1, step2) + money)
  }

  return Math.min(dp(0), dp(1))
}
