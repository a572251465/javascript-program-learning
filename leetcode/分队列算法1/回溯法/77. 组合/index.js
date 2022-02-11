/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const arr = Array.from({ length: n }).map((_, key) => key + 1)
  const result = []

  function tb(arr = [], res = []) {
    if (res.length === k) {
      result.push(res.slice())
      return
    }

    let i = 0
    for (; i < arr.length; i += 1) {
      const item = arr[i]
      if (res.length > 0 && item < res[res.length - 1]) continue

      const newArr = arr.slice()

      res.push(item)
      newArr.splice(i, 1)
      tb(newArr, res)
      res.pop()
    }
  }
  tb(arr, [])

  return result
}
