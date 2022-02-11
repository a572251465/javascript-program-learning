/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = []
  const existArr = []

  function tb(candidates = [], target, arr = []) {
    const sum = arr.reduce((pre, cur) => pre + cur, 0)

    if (sum === target) {
      const str = arr.toString()
      if (existArr.includes(str)) return
      result.push(Object.assign([], arr))
      existArr.push(str)
      return
    }

    let i = 0
    for (; i < candidates.length; i += 1) {
      if (arr.length > 0 && candidates[i] < arr[arr.length - 1]) continue
      const item = candidates[i]
      arr.push(item)
      const newArr = Object.assign([], candidates)
      newArr.splice(i, 1)
      tb(newArr, target, arr)
      arr.pop()
    }
  }
  tb(candidates, target, [])
  return result
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
