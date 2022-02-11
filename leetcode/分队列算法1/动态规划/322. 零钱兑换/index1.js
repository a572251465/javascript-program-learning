/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount < 0) return -1
  if (amount === 0) return 0

  const dp = new Array(amount + 1)
  dp.fill(amount + 1)
  dp[0] = 0

  for (let exchange = 0; exchange < dp.length; exchange += 1) {
    for (const money of coins) {
      // 如果兑换的钱 比现有的钱少 不可能成功 跳过
      if (exchange - money < 0) continue

      dp[exchange] = Math.min(dp[exchange], 1 + dp[exchange - money])
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount]
}
