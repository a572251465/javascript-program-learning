/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x !== Math.abs(x)) return false

  let res = 0
  let y = x
  while (y !== 0) {
    const expect = y % 10
    y = y / 10 | 0

    res = res * 10 + expect
  }

  return res === x
};

// 1234321
