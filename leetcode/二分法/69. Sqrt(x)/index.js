/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 0,
    end = x,
    ans = -1

  while (start <= end) {
    const mid = ((start + end) / 2) | 0
    if (mid * mid <= x) {
      start = mid + 1
      ans = mid
    } else {
      end = mid - 1
    }
  }

  return ans
}
