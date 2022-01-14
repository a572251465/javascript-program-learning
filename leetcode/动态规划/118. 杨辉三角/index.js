/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]

  const baseArr = [[1], [1, 1]]
  let preItem = []
  for (let i = 2; i < numRows; i += 1) {
    const nextVal = i + 1
    const newItem = (new Array(nextVal)).fill(undefined)
    if (preItem.length === 0) preItem = baseArr[i - 1]

    // 填充基本数据
    newItem[0] = 1
    newItem[newItem.length - 1] = 1
    newItem[1] = newItem[newItem.length - 2] = i

    for (let j = 2; j < (newItem.length - 2); j += 1 ) {
      const value = newItem[j]
      if (value === undefined) {
        newItem[j] = preItem[j - 1] + preItem[j]
      }
    }
    baseArr.push(newItem)
    preItem = newItem
  }

  return baseArr
}