/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.replace(/^\s+|\s+$/gi, '')

  let len = 0,
    index = s.length - 1
  while (index >= 0) {
    const c = s.charAt(index)
    if (c === ' ') return len
    len++
    index--
  }

  return len
}
