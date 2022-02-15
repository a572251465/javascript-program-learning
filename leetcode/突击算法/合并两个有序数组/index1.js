/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1

  const arr = [],
    p = nums1.slice(0, m),
    p1 = nums2.slice()

  while (p.length && p1.length) {
    const val1 = p.shift(),
      val2 = p1.shift()

    if (val1 === val2) {
      arr.push(val1, val2)
    } else if (val1 < val2) {
      arr.push(val1)
      p1.unshift(val2)
    } else {
      arr.push(val2)
      p.unshift(val1)
    }
  }

  if (p.length) arr.push(...p)
  if (p1.length) arr.push(...p1)

  arr.forEach((item, key) => {
    nums1[key] = item
  })
}
