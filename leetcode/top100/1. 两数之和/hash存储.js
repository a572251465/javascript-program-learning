/**
 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 
 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums = [], target) {
  const cacheMap = new Map()

  for (let i = 0; i < nums.length; i += 1) {
    const item = nums[i]

    if (cacheMap.has(item)) return [cacheMap.get(item), i]

    cacheMap.set(target - item, i)
  }
  return []
}
