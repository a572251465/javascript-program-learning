var arrangeCoins = function (n) {
  let left = 1,
    right = n
  while (left < right) {
    const mid = Math.floor((right - left + 1) / 2) + left
    if (mid * (mid + 1) <= 2 * n) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  return left
}
