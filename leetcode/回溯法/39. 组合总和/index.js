/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates = [], target) {
  const result = []

  function bt(candidates, target, arr = []) {
    if (arr.length >= 150) return
    const sum = arr.reduce((pre, cur) => pre + cur, 0)
    if (sum > target) return
    if (sum === target) {
      result.push(Object.assign([], arr))
      return
    }

    for (let i = 0; i < candidates.length; i += 1) {
      if (arr.length > 0 && candidates[i] < arr[arr.length - 1]) continue
      arr.push(candidates[i])
      bt(candidates, target, arr)
      arr.pop()
    }
  }
  bt(candidates, target, [])
  return result
}

// console.log(combinationSum([2, 3, 5], 8))
