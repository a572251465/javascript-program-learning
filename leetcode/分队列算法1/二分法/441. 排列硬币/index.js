/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n <= 1) return n

  function sum(k) {
    let sum = 0
    let i = 1

    for (; i <= k; i += 1) {
      sum += i
    }

    return sum
  }

  let start = 1
  let end = n
  while (start <= end) {
    const mid = (start + (end - start) / 2) | 0
    const total = sum(mid)

    if (total === n) {
      return mid
    } else if (total > n) {
      end = mid - 1
    } else if (total < n) {
      start = mid + 1
    }
  }

  return start - 1
}

console.log(arrangeCoins(424238335))
