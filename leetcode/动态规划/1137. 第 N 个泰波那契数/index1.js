/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n, memo = {}) {
  if (n <= 1) return n
  if (n === 2) return 1
  if (memo[n]) return memo[n]

  return (memo[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3))
}
