/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const mapping = {}

  let i = 0
  for (; i < nums.length; i += 1) {
    const item = nums[i]

    if (typeof mapping[item] !== 'undefined') return [mapping[item], i]
    const expect = target - item

    mapping[expect] = i
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
