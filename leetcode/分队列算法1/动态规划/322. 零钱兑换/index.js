/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount, memo = {}) {
  // 如果金额是0 不需要兑换
  if (amount === 0) return 0
  // 如果金额小于0 不可能兑换成功 直接返回-1
  if (amount < 0) return -1

  let res = Number.MAX_SAFE_INTEGER

  // 查看备忘录中是否有值
  if (memo[amount]) return memo[amount]

  for (const money of coins) {
    // 使用动态规划 计算每个值
    const subProblem = coinChange(coins, amount - money)

    // 如果需要凑齐金额 比 给出金额小 不可能凑出 直接跳过
    if (subProblem < 0) continue

    // 获取到兑换 用到最小值
    res = Math.min(res, subProblem + 1)
  }

  // 保存备忘录
  memo[amount] = res === Number.MAX_SAFE_INTEGER ? -1 : res
  return memo[amount]
}
