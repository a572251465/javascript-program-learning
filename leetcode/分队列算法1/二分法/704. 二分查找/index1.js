/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) return -1

  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    const i = (start + (end - start) / 2) | 0
    const value = nums[i]

    if (target === value) {
      return i
    } else if (target > value) {
      start = i + 1
    } else if (target < value) {
      end = i - 1
    }
  }

  return -1
}
