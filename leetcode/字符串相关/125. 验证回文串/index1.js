/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 1) return true

  let i = 0,
    res = ''
  while (i < s.length) {
    const c = s.charAt(i).toLowerCase()
    i++

    if (!/[0-9a-zA-Z]/gi.test(c)) continue

    res += c
  }

  const res1 = res.split('').reverse().join('')
  return res1 === res
}

console.log(isPalindrome('race a car'))
