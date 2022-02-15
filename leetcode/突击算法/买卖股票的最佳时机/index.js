/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let diff = Number.MIN_SAFE_INTEGER,
    pre = prices[0],
    i = 1

  for (; i < prices.length; i += 1) {
    const cur = prices[i]

    pre = Math.min(pre, cur)
    diff = Math.max(diff, cur - pre)
  }

  return diff > 0 ? diff : 0
}
