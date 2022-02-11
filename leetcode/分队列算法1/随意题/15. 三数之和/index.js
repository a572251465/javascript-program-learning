/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = []

  // 1. 进行排序
  nums = nums.sort((a, b) => a - b)

  // 2. 将三数之和 降维成为 两数之和
  let i = 0
  for (; i < nums.length; i += 1) {
    const curr = nums[i]
    if (curr > 0) return result

    if (i > 0 && nums[i] === nums[i - 1]) continue

    let l = i + 1,
      r = nums.length - 1
    while (l < r) {
      const res = curr + nums[l] + nums[r]
      if (res === 0) {
        const valueArr = [curr, nums[l], nums[r]]
        result.push(valueArr)
        while (l < r && nums[l + 1] === nums[l]) ++l
        while (l < r && nums[r - 1] === nums[r]) --r

        ++l
        --r
      } else if (res < 0) {
        ++l
      } else {
        --r
      }
    }
  }

  return result
}
