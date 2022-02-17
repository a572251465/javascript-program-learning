/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  rowIndex = rowIndex + 1
  const base = [[1], [1, 1]]

  if (rowIndex === 1) return base[0]
  if (rowIndex === 2) return base[1]

  let i = 2,
    pre = base[1]

  for (; i < rowIndex; i++) {
    const cur = [1]

    let j = 1
    const len = i
    for (; j < len; j += 1) {
      const val = pre[j - 1] + pre[j]
      cur.push(val)
    }
    cur.push(1)
    pre = cur
  }

  return pre
}
