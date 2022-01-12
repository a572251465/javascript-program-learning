const arr = [2, 4, 3, 4, 5, 3, 6, 6]

function quickSort(arr = []) {
  if (arr.length <= 1) return arr

  const left = [],
    right = [],
    index = Math.floor(arr.length / 2),
    middle = arr.splice(index, 1)[0]

  for (const item of arr) {
    if (item < middle) {
      left.push(item)
    } else {
      right.push(item)
    }
  }

  return quickSort(left).concat([middle], quickSort(right))
}

console.log(quickSort(arr))
