/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n <= 1) return n
  if (n === 2) return 1

  let one = 0,
    two = 1,
    three = 1,
    i = 3,
    curr = 0

  for (; i <= n; i += 1) {
    curr = one + two + three
    one = two
    two = three
    three = curr
  }

  return curr
}
