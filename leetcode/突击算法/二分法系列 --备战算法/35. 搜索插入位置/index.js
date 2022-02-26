/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length - 1

  // 1. 使用[start, end] 作为界限的， 这是一种包前包后的使用方式
  while (start <= end) {
    const mid = (start + (end - start) / 2) | 0
    const value = nums[mid]

    if (value === target) {
      return mid
    } else if (value < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return start
}

console.log(searchInsert([1, 3, 4, 6], 5))
