/**
 * @param {number[]} nums
 * @param {number} target
 * @return {void}
 */
var search = function (nums, target) {
  const searchHelper = (nums, left = 0, right = 0, target) => {
    if (right < left) return -1

    const mid = (left + (right - left) / 2) | 0,
      leftValue = nums[left],
      rightValue = nums[right],
      midValue = nums[mid]

    if (target === leftValue) return left
    if (target === midValue) return mid
    if (target === rightValue) return right

    if (leftValue < midValue) {
      if (target > leftValue && target < midValue) {
        return searchHelper(nums, left + 1, mid - 1, target)
      } else {
        return searchHelper(nums, mid + 1, right - 1, target)
      }
    } else {
      if (target > midValue && target < rightValue) {
        return searchHelper(nums, mid + 1, right - 1, target)
      } else {
        return searchHelper(nums, left + 1, mid - 1, target)
      }
    }
  }
  return searchHelper(nums, 0, nums.length - 1, target)
}
