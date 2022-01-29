/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const l = 10,
    len = s.length,
    map = {},
    res = []

  let i = 0
  for (; i <= len - l; i += 1) {
    const con = s.slice(i, i + l)
    map[con] = (map[con] || 0) + 1
    if (map[con] === 2) res.push(con)
  }

  return res
}
