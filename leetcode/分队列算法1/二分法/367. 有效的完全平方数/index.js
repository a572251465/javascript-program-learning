/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num <= 1) return true

  let end = Math.ceil(num / 2)
  let start = 1

  while(start <= end) {
    const mid = (start + (end - start) / 2) | 0
    const product = mid * mid

    if (product === num) {
      return true
    } else if (product < num) {
      start = mid + 1
    } else if (product > num) {
      end = mid - 1
    }
  }

  return false
}

console.log(isPerfectSquare(16))
