/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return []

  const map = {}
  nums1.forEach((item) => {
    if (Reflect.has(map, item)) {
      map[item] = ++map[item]
    } else {
      map[item] = 1
    }
  })

  const totals = []
  nums2.forEach((item) => {
    if (map[item]) {
      totals.push(item)
      map[item] = --map[item]
    }
  })

  return totals
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
