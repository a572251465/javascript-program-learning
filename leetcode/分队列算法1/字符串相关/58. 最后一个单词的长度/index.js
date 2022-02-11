/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.replace(/^\s+|\s+$/ig, '')

  let res = '',
    i = 0
  for (; i < s.length; i += 1) {
    const item = s.charAt(i)
    if (item === ' ') {
      res = ''
      continue
    }

    res += item
  }

  return res.length
}

console.log(lengthOfLastWord('   fly me   to   the moon  '))
