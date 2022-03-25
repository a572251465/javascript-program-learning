/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1

  while (start <= end) {
    const mid = (start + (end - start) / 2) | 0
    const value = nums[mid]

    if (value === target) return mid
    if (value < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}
