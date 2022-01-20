/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (nums.length === 0) return [[]]
  if (nums.length === 1) return [[], nums]

  let result = []

  function tb(nums = [], n, arr = []) {
    if (arr.length === n) {
      result.push(arr.slice())
      return
    }

    let i = 0
    for (; i < nums.length; i += 1) {
      const item = nums[i],
        newArr = nums.slice(i + 1)

      arr.push(item)
      tb(newArr, n, arr)
      arr.pop()
    }
  }

  let i = 2
  const len = nums.length
  while (i < len) {
    tb(nums, i, [])
    i++
  }

  result = result.concat([nums])
  return [[], ...result, ...nums.map((item) => [item])]
}

// console.log(subsets([1, 2, 3]))
