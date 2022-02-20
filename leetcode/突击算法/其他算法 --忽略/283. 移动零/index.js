/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0
  for (; i < nums.length; i += 1) {
    const startVal = nums[i]
    if (startVal !== 0) continue

    let j = i + 1
    let endVal = nums[j]
    while (!endVal && typeof endVal !== 'undefined') endVal = nums[++j]

    if (endVal) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }

  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
