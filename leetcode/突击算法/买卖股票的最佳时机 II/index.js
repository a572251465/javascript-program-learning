/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let i = 1,
    ans = 0

  for (; i < prices.length; i += 1) {
    const cur = prices[i],
      pre = prices[i - 1]

    ans += Math.max(0, cur - pre)
  }

  return ans
}
