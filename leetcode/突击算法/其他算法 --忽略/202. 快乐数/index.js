/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function getNext(n) {
    let total = 0
    while (n > 0) {
      const item = n % 10
      n = (n / 10) | 0
      total += item * item
    }

    return total
  }

  let slow = n,
    fast = getNext(n)

  while (slow !== fast) {
    slow = getNext(slow)
    fast = getNext(getNext(fast))
  }

  return fast === 1
}
