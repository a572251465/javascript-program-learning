/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0
  let end = nums.length

  while (start < end) {
    const index = ((start + end) / 2) | 0
    const value = nums[index]

    if (target === value) {
      return index
    } else if (target > value) {
      start = index + 1
    } else if (target < value) {
      end = index
    }
  }

  return start
}
