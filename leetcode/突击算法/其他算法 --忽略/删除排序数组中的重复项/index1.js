/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums

  const len = nums.length
  let slow = 0,
    fast = 1,
    i = 0

  for (; i < len; i += 1) {
    if (nums[slow] !== nums[fast]) {
      nums[slow + 1] = nums[fast]

      slow++
    }

    fast++
  }

  return slow
}
