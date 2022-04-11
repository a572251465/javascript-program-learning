/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length
  const dp = new Array(n + 1).fill(0)

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = Math.min(dp[j], dp[j + i]) + triangle[i][j]
    }
  }

  return dp[0]
}
