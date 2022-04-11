/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const result = []

  function dp(triangle, i, j, sum) {
    const cur = triangle[j][i]
    sum += cur

    if (j === triangle.length - 1) {
      result.push(sum)
      return
    }

    dp(triangle, i, j + 1, sum)
    dp(triangle, i + 1, j + 1, sum)
  }
  dp(triangle, 0, 0, 0)

  return Math.min(...result)
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
