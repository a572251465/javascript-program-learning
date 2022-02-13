function fastSort(arr = []) {
  if (arr.length <= 1) return arr

  const left = [],
    right = []
  const mid = (arr.length / 2) | 0,
    value = arr[mid]

  arr.splice(mid, 1)
  arr.forEach((item) => {
    if (item <= value) {
      left.push(item)
    } else {
      right.push(item)
    }
  })

  return fastSort(left)
    .concat([value])
    .concat(fastSort(right))
}

console.log(fastSort([2, 1, 3, 4, 2, 5, 6]))
