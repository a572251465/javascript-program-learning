/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 0) return

  let j = 0,
    i = 0

  for (; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      let temp = nums[i]
      nums[i] = nums[j]
      nums[j++] = temp
    }
  }

  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
