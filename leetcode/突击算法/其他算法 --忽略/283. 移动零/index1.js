/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 0

  for (; i < nums.length; i += 1) {
    const item = nums[i]

    if (item !== 0) {
      nums[j++] = item
    }
  }

  for (let i = j; i < nums.length; i += 1) nums[i] = 0
}
