/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let arr = matrix.filter((item) => item[0] <= target && item[item.length - 1] >= target)
  if (arr.length === 0) return false
  arr = arr[0]

  let left = 0,
    right = arr.length - 1

  while (left <= right) {
    const mid = (left + (right - left) / 2) | 0
    const value = arr[mid]

    if (target === value) {
      return true
    } else if (target > value) {
      left = mid + 1
    } else if (target < value) {
      right = mid - 1
    }
  }

  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ],
    3
  )
)
