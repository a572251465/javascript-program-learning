/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums

  for (let i = 0; i < nums.length - 1; ) {
    const cur = nums[i]
    const next = nums[i + 1]
    if (cur === next) {
      nums.splice(i + 1, 1)
    } else {
      i += 1
    }
  }

  return nums.length
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log(removeDuplicates([1, 1, 2]))
