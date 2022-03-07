/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num <= 1) return true
  let start = 1,
    end = (num / 2) | 0

  while (start <= end) {
    const cur = (start + (end - start) / 2) | 0
    const res = cur * cur

    if (res === num) return true
    if (res < num) {
      start = cur + 1
    } else {
      end = cur - 1
    }
  }

  return false
}
