/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let start = 1
  let end = n

  while (start <= n) {
    const mid = (start + (end - start) / 2) | 0
    const status = guess(mid)

    if (status === 0) {
      return mid
    } else if (status === -1) {
      end = mid - 1
    } else if (status === 1) {
      start = mid + 1
    }
  }
}
