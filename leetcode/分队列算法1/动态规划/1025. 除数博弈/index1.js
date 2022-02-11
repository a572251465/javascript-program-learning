/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
  const arr = new Array(n + 5)

  arr[1] = false
  arr[2] = true

  let i = 3
  for(; i <=n; i += 1) {
    for(let j = 1; j < i; j += 1) {
      if ((i % j === 0) && !arr[i - j]) {
        arr[i] = true
        break
      }
    }
  }
  return !!arr[n]
}
