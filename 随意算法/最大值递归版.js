const arr = [1, 3, 4, 2, 9, 4, 6, 3]

const getMaxValue = (arr) => {
  return process(arr, 0, arr.length - 1)
}

function process(arr = [], left, right) {
  if (left >= right) return arr[right]

  const middle = left + ((right - left) >> 1)
  return Math.max(process(arr, left, middle), process(arr, middle + 1, right))
}

console.log(getMaxValue(arr))
