/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums2.length === 0) return []

  nums1 = [...new Set(nums1)]
  nums2 = [...new Set(nums2)]

  const res = []

  function findItem(arr, target) {
    arr.sort((a, b) => a - b)
    let start = 0,
      end = arr.length - 1

    while (start <= end) {
      const mid = (start + (end - start) / 2) | 0
      const value = arr[mid]

      if (value === target) return value
      if (value < target) {
        start = mid + 1
      }
      if (value > target) {
        end = mid - 1
      }
    }

    return -1
  }

  let i = 0
  for (; i < nums2.length; i += 1) {
    const result = findItem(nums1, nums2[i])
    if (result !== -1) res.push(nums2[i])
  }

  return res
}
