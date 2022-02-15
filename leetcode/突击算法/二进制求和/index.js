/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let pre = 0,
    cur = 0

  const max = Math.max(a.length, b.length)
  a = a.padStart(max, '0')
  b = b.padStart(max, '0')

  let i = max - 1,
    res = ''
  for (; i >= 0; i -= 1) {
    const p = +a.charAt(i),
      p1 = +b.charAt(i)

    const item = p + p1 + pre
    pre = (item / 2) | 0
    cur = item % 2

    res = `${cur}${res}`
  }

  if (pre) res = `${pre}${res}`
  return res
}
