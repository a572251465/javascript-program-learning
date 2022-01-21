/**
 * @param {number} n
 * @return {number}
 */
var leastMinutes = function (n) {
  if (n <= 3) return n

  const arr = new Array(n + 1)
  arr[1] = 1

  let i = 2
  for (; i <= n; i += 1) {
    arr[i] = Math.min(arr[Math.floor((i + 1) / 2)] + 1, arr[i - 1] + 1)
  }

  return arr[n]
}

console.log(leastMinutes(7))
