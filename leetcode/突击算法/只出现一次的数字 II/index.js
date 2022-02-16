/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0]

  const hashMap = new Map()
  nums.forEach((item) => {
    let count = hashMap.get(item) || 0
    hashMap.set(item, ++count)
  })

  for (const [key, value] of hashMap) {
    if (value < 3) return key
  }

  return 0
}
