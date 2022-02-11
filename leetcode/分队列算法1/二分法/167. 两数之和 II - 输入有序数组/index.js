/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0
  let right = numbers.length

  // [left, right)
  while (left < right) {
    const i = (left + (right - left) / 2) | 0
    const mid = numbers[i]

    if (mid > target) {
      right = i
    } else {
      left = i + 1
    }
  }

  const surplus = left < 2 ? numbers : numbers.slice(0, left)
  const map = {}
  for (let i = 0; i < surplus.length; i += 1) {
    const item = surplus[i]
    if (Reflect.has(map, item)) return [+map[item], i + 1]

    map[target - item] = i + 1
  }

  return [0, 0]
}

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([2, 3, 4], 6))
console.log(twoSum([-1, 0], -1))
