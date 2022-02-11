/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (nums.length === 0) return 0

  let right = 0,
    left = 0,
    max = Number.MAX_SAFE_INTEGER

  const win = []
  while (right < nums.length) {
    const c = nums[right++]
    win.push(c)

    let sum = win.reduce((pre, cur) => pre + cur, 0)
    while (sum >= target) {
      max = Math.min(max, win.length)

      const d = nums[left++]
      sum = sum - d
      win.shift()
    }
  }

  return max === Number.MAX_SAFE_INTEGER ? 0 : max
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]))
