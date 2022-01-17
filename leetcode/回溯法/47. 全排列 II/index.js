/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [],
    len = nums.length

  function tb(nums, arr = []) {
    if (arr.length === len) {
      result.push(arr.slice())
      return
    }

    const exist = []
    let i = 0
    for (; i < nums.length; i += 1) {
      const item = nums[i]
      if (exist.includes(item)) continue
      exist.push(item)

      arr.push(item)
      const newNums = nums.slice()
      newNums.splice(i, 1)
      tb(newNums, arr)
      arr.pop()
    }
  }
  tb(nums, [])
  return result
}
