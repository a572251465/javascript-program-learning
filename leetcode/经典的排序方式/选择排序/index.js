function selectionSort(arr = []) {
  const { length: len } = arr
  let i = 0

  for (; i < arr.length - 1; i += 1) {
    let minIndex = i

    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }

    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

const arr = [3, 1, 2, 5, 3, 7, 8]
console.log(selectionSort(arr))
