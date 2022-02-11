/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return []

  function findIndex(nums = [], target) {
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
      const mid = (start + (end - start) / 2) | 0
      const value = nums[mid]

      if (value === target) {
        return mid
      } else if (value > target) {
        end = mid - 1
      } else if (value < target) {
        start = mid + 1
      }
    }

    return -1
  }

  nums1 = [...new Set(nums1)].sort((a, b) => a - b)
  nums2 = [...new Set(nums2)].sort((a, b) => a - b)

  const bNums = nums1.length > nums2.length ? nums1 : nums2
  const sNums = nums1.length <= nums2.length ? nums1 : nums2

  const totals = []
  sNums.forEach((item) => {
    const index = findIndex(bNums, item)
    if (index !== -1) totals.push(item)
  })

  return totals
}

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
