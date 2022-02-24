function bubbleSort(arr = []) {
  const len = arr.length
  let i = 0

  for (; i < len; i += 1) {
    for (let j = 0; j < len - 1 - i; j += 1) {
      const cur = arr[j],
        next = arr[j + 1]

      if (cur < next) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }

  return arr
}

const arr = [1, 3, 2, 4, 6, 2, 8, 10]
console.log(bubbleSort(arr))
