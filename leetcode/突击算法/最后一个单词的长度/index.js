/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.replace(/\s+$/gi, '')

  let len = 0,
    i = s.length - 1
  while (s.charAt(i) !== ' ' && i >= 0) {
    len++
    i--
  }

  return len
}
