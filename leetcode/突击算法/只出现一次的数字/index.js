/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = nums[0]
  if (nums.length > 1) {
    for (let i = 1; i < nums.length; i += 1) ans = ans ^ nums[i]
  }

  return ans
}

console.log(singleNumber([4, 1, 2, 1, 2]))
