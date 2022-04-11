/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const memo = {}
  function dfs(triangle, i, j) {
    if (i === triangle.length) return 0

    const index = `${i}${j}`
    if (memo[index]) return memo[index]

    memo[index] =
      Math.min(dfs(triangle, i + 1, j), dfs(triangle, i + 1, j + 1)) +
      triangle[i][j]
    return memo[index]
  }
  return dfs(triangle, 0, 0)
}
