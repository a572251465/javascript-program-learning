/**
 * @param {number} n
 * @return {number}
 */
var leastMinutes = function (n) {
  let load = 1, time = 0
  while(load < n) {
    load = load * 2
    time ++
  }

  return time + 1
}

console.log(leastMinutes(7))
