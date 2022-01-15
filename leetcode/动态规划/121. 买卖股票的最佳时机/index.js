/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let pre = prices[0],
    diff = Number.MIN_SAFE_INTEGER,
    i = 1

  for (; i < prices.length; i += 1) {
    pre = Math.min(pre, prices[i])
    diff = Math.max(diff, prices[i] - pre)
  }

  return diff < 0 ? 0 : diff
}
