var recall = function (nums = [], specing = [], result = []) {
  if (nums.length === specing.length) {
    result.push(Object.assign([], specing))
    return
  }

  for (const item of nums) {
    if (specing.includes(item)) continue

    specing.push(item)
    recall(nums, specing, result)
    specing.pop()
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []

  recall(nums, [], result)
  return result
}
