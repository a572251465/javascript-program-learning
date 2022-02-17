/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === '') return true

  let start = 0,
    end = s.length - 1

  const reg = /[a-zA-Z0-9]+/i

  while (start <= end) {
    const val1 = s.charAt(start).toLowerCase(),
      val2 = s.charAt(end).toLowerCase()

    if (!reg.test(val1)) {
      start++
      continue
    }

    if (!reg.test(val2)) {
      end--
      continue
    }

    if (val1 !== val2) return false

    start++
    end--
  }

  return true
}

console.log(isPalindrome('race a car'))
