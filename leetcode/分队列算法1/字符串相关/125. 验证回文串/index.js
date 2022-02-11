/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 1) return true

  // abba
  // abcba
  // ab
  let start = 0,
    end = s.length - 1
  while (end - start > 0) {
    let v1 = s.charAt(start)
    let v2 = s.charAt(end)

    if (!/[a-zA-Z0-9]/gi.test(v1)) {
      start += 1
      continue
    }

    if (!/[a-zA-Z0-9]/gi.test(v2)) {
      end -= 1
      continue
    }

    if (v1 !== v2 && v1.toLowerCase() !== v2.toLowerCase()) return false

    start += 1
    end -= 1
  }

  return true
}
