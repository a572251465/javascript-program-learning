/**
 * @param {string} s
 * @return {number}
 *  pwwkew
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0
  let right = 0
  let res = 0
  const len = s.length
  const win = {}

  while (right < len) {
    const c = s.charAt(right)
    right++
    if (typeof win[c] === 'undefined') win[c] = 0
    win[c]++

    while (win[c] > 1) {
      const d = s[left]
      left++
      win[d]--
    }

    res = Math.max(res, right - left)
  }
  return res
}

console.log(lengthOfLongestSubstring('pwwkew'))
