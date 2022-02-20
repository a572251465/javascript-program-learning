/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 1,
    end = x,
    ans = 0

  while (start <= end) {
    const mid = (start + (end - start) / 2) | 0
    if (mid * mid <= x) {
      start = mid + 1
      ans = mid
    } else {
      end = mid - 1
    }
  }

  return ans
}

console.log(mySqrt(4))
console.log(mySqrt(8))
