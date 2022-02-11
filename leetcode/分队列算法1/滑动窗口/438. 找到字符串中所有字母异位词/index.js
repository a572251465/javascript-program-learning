/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const need = {},
    win = {},
    res = []
  p.split('').forEach((item) => {
    need[item] = (need[item] || 0) + 1
  })

  let left = 0,
    right = 0,
    valid = 0

  while (right < s.length) {
    const c = s[right++]
    if (need[c]) {
      win[c] = (win[c] || 0) + 1
      if (need[c] === win[c]) valid++
    }

    while (right - left >= p.length) {
      if (Object.keys(need).length === valid) res.push(left)

      const d = s[left++]
      if (need[d]) {
        if (need[d] === win[d]) valid--
        win[d]--
      }
    }
  }

  return res
}
