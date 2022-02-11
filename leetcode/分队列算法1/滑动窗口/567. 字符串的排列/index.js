/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const need = {},
    win = {}
  s1.split('').forEach((item) => {
    need[item] = (need[item] || 0) + 1
  })

  let right = 0,
    left = 0,
    valid = 0

  while (right < s2.length) {
    const c = s2[right++]
    if (need[c]) {
      win[c] = (win[c] || 0) + 1
      if (need[c] === win[c]) valid++
    }

    while (right - left >= s1.length) {
      if (valid === Object.keys(need).length) return true

      const d = s2[left++]
      if (need[d]) {
        if (need[d] === win[d]) valid--
        win[d]--
      }
    }
  }

  return false
}

console.log(checkInclusion('ab', 'eidbaooo'))
