/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0,
    res = 0
  const win = {}

  while (right < s.length) {
    const c = s[right++]
    win[c] = (win[c] || 0) + 1

    while (win[c] > 1) {
      const d = s[left++]
      win[d]--
    }

    res = Math.max(res, right - left)
  }

  return res
}
