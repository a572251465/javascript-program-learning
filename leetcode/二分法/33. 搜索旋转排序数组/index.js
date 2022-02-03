/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length
  const map = {}
  nums.forEach((item, key) => (map[item] = key))

  const arr = nums.sort((a, b) => a - b)

  let left = 0,
    right = len - 1,
    res = Number.MAX_SAFE_INTEGER

  while (left <= right) {
    const mid = (left + (right - left) / 2) | 0
    const value = arr[mid]

    if (value === target) {
      res = value
      left = Number.MAX_SAFE_INTEGER
    } else if (value < target) {
      left = mid + 1
    } else if (value > target) {
      right = mid - 1
    }
  }

  return res === Number.MAX_SAFE_INTEGER ? -1 : map[res]
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
