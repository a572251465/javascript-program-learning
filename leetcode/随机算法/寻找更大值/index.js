// [1, 2, 3, 4]
function findMoreNumber(arr) {
  let i = arr.length - 2
  const bkArr = Object.assign([], arr)

  for (; i >= 0; i--) {
    const cur = arr[i]
    const j = bkArr.findIndex((item) => item > cur)
    if (j !== -1 && j >= i) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      return arr
    }
  }

  if (i < 0) {
    arr.sort((a, b) => a - b)
    return arr
  }
}
