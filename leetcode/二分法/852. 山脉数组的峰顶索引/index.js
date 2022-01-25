/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let start = 0
  let end = arr.length

  while (start < end) {
    const mid = (start + (end - start) / 2) | 0
    const midValue = arr[mid]
    const midNextValue = arr[mid + 1]

    if (midValue > midNextValue) {
      end = mid
    } else {
      start = mid + 1
    }
  }

  return start
}

console.log(peakIndexInMountainArray([0, 1, 0]))
console.log(peakIndexInMountainArray([0, 2, 1, 0]))
console.log(peakIndexInMountainArray([0, 10, 5, 2]))
console.log(peakIndexInMountainArray([3, 4, 5, 1]))
console.log(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]))
