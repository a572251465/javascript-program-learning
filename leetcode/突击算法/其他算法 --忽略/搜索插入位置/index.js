/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length

  while (start < end) {
    const mid = (start + (end - start) / 2) | 0,
      value = nums[mid]

    if (target === value) {
      return mid
    } else if (target > value) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  return end
}

console.log(searchInsert([1, 3, 5, 6], 2))
