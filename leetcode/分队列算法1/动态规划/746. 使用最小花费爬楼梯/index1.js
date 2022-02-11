// https://leetcode-cn.com/problems/min-cost-climbing-stairs/
var minCostClimbingStairs = function (cost = []) {
  const len = cost.length,
    arr = new Array(len)

  arr[0] = cost[0]
  arr[1] = cost[1]

  let i = 2

  for (; i < len; i += 1) {
    arr[i] = Math.min(arr[i - 1], arr[i - 2]) + cost[i]
  }
  return Math.min(arr[len - 1], arr[len - 2])
}
