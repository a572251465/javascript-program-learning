/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return

  let p1 = 0,
    p2 = 0
  const copyArr = []

  while (p1 < m && p2 < n) {
    const val1 = nums1[p1],
      val2 = nums2[p2]

    if (val1 === val2) {
      copyArr.push(val1, val2)
      p1++
      p2++
    } else if (val1 < val2) {
      copyArr.push(val1)
      p1++
    } else {
      copyArr.push(val2)
      p2++
    }
  }

  if (p1 < m) copyArr.push(...nums1.slice(p1, m))
  if (p2 < n) copyArr.push(...nums2.slice(p2))

  copyArr.forEach((item, key) => {
    nums1[key] = item
  })
}
