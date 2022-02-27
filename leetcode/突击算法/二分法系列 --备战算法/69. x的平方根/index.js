/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) return x

  let start = 1,
    end = (x / 2) | 0,
    cur = -1

  while (start <= end) {
    const mid = (start + (end - start) / 2) | 0
    const value = mid * mid

    if (value === x) return mid
    if (value < x) {
      start = mid + 1
      cur = mid
    }
    if (value > x) {
      end = mid - 1
    }
  }

  return cur
}
