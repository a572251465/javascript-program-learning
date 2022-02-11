/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function leftRange(nums = [], target) {
  let left = 0
  let right = nums.length

  // [left right)
  while (left < right) {
    const mid = (left + (right - left) / 2) | 0
    const value = nums[mid]

    if (value === target) {
      right = mid
    } else if (value > target) {
      right = mid
    } else if (value < target) {
      left = mid + 1
    }
  }

  if (left === nums.length || nums[left] !== target) return -1
  return right
}

function rightRange(nums = [], target) {
  let left = 0
  let right = nums.length

  // [left, right)
  while (left < right) {
    const mid = (left + (right - left) / 2) | 0
    const value = nums[mid]

    if (value === target) {
      left = mid + 1
    } else if (value > target) {
      right = mid
    } else if (value < target) {
      left = mid + 1
    }
  }

  if (left === 0) return -1

  return nums[left - 1] === target ? left - 1 : -1
}

var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1]

  return [leftRange(nums, target), rightRange(nums, target)]
}

console.log(searchRange([1], 1))
