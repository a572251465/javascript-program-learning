/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                   1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let start = 1,
    end = n

  while (start <= end) {
    const mid = (start + (end - start) / 2) | 0
    const res = guess(mid)

    if (res === 0) return mid
    if (res > 0) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return -1
}
