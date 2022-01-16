/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const result = []
  result[0] = nums[0]

  // 使用两分法 获取下标
  function getIndex(nums = [], value) {
    let start = 0,
      end = nums.length - 1

    while (start < end) {
      const middle = ((start + end) / 2) | 0
      const middleValue = nums[middle]

      if (middleValue < value) {
        start = middle + 1
      } else {
        end = middle
      }
    }
    return start
  }

  let i = 1
  for (; i < nums.length; i += 1) {
    const preVal = result[result.length - 1],
      currentItem = nums[i]
    if (preVal < currentItem) {
      result.push(currentItem)
    } else {
      const index = getIndex(result, currentItem)
      result[index] = currentItem
    }
  }

  return result.length
}
