var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low
    const num = nums[mid]
    if (num === target) {
      return mid
    } else if (num > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}

// [-1,0,3,5,9,12]
