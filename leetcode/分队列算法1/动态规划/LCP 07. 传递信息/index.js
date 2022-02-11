/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation = [], k) {
  let step = 0

  function dp(initVal, k) {
    if (k === 0) {
      if (initVal === 0) step++
      return
    }

    const loopArr = relation.filter((item) => item[1] === initVal).map((item) => item[0])
    loopArr.forEach((item) => {
      dp(item, k - 1)
    })
  }
  dp(n - 1, k)
  return step
}

console.log(
  numWays(
    5,
    [
      [0, 2],
      [2, 1],
      [3, 4],
      [2, 3],
      [1, 4],
      [2, 0],
      [0, 4]
    ],
    3
  )
)
