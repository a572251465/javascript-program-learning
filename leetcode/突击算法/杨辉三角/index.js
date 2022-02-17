/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const base = [[1], [1, 1]]
  if (numRows === 1) return [[1]]
  if (numRows === 2) return base

  let i = 2,
    pre = base[1]

  for (; i < numRows; i++) {
    const cur = [1]

    let j = 1
    const len = i
    for (; j < len; j += 1) {
      const val = pre[j - 1] + pre[j]
      cur.push(val)
    }
    cur.push(1)

    base.push(cur)
    pre = cur
  }

  return base
}

console.log(generate(5))
