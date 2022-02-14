/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let res = []

  while (columnNumber > 0) {
    columnNumber--
    const code = columnNumber % 26
    res.push(String.fromCharCode('A'.charCodeAt() + code))
    columnNumber = (columnNumber / 26) | 0
  }
  res = res.reverse()
  return res.join('')
}
