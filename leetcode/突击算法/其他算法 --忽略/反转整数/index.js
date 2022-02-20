/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0

  while (x !== 0) {
    const digit = x % 10
    x = (x / 10) | 0

    res = res * 10 + digit

    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) return 0
  }

  return res
}
