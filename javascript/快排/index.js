const quickRow = (arr) => {
  if (arr.length <= 1) return arr
  const len = arr.length

  const left = [],
    right = [],
    mid = (arr / 2) | 0,
    value = arr[mid]

  arr.splice(mid, 1)
  arr.forEach((item) => {
    if (item <= value) {
      left.push(item)
    } else {
      right.push(item)
    }
  })

  return quickRow(left).concat([value]).concat(quickRow(right))
}

console.log(quickRow([1, 4, 6, 2, 4, 5, 6, 8, 1, 2, 4]))
