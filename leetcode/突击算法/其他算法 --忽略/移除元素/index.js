/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const n = nums.length

  let left = 0
  for (let right = 0; right < n; right += 1) {
    if (nums[right] !== val) {
      nums[left] = nums[right]
      left++
    }
  }

  return left
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
// console.log(removeElement([3, 3], 3))
// console.log(removeElement([4, 5], 5))
