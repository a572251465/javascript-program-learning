/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums = [], target) {
  if (target > nums[nums.length - 1]) return nums.length

  let start = 0,
    end = nums.length - 1
  while (start < end) {
    const middleIndex = ((start + end) / 2) | 0
    const value = nums[middleIndex]

    if (target > value) {
      start = middleIndex + 1
    } else {
      end = middleIndex
    }
  }

  return start
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 0))
console.log(searchInsert([1], 0))
