/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {
    [target - nums[0]]: 0
  }

  let i = 1
  for (; i < nums.length; i += 1) {
    const item = nums[i]
    if (Reflect.has(obj, item)) return [+obj[item], i]

    obj[target - item] = i
  }
  return []
}
