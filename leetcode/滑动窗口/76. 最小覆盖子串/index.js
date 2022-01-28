/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const win = {}
  const need = {}

  t.split('').forEach((item) => {
    need[item] = (need[item] || 0) + 1
  })

  let left = 0,
    right = 0,
    valid = 0,
    start = 0,
    len = Number.MAX_SAFE_INTEGER

  while (right < s.length) {
    // 增大窗口
    const c = s[right++]
    if (need[c]) {
      win[c] = (win[c] || 0) + 1
      if (win[c] === need[c]) valid++
    }

    // 开始缩小窗口
    while (valid === Object.keys(need).length) {
      if (right - left < len) {
        start = left
        len = right - left
      }

      const d = s[left++]
      if (need[d]) {
        if (win[d] === need[d]) valid--
        win[d]--
      }
    }
  }

  return len === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, len)
}
// ADOBEC ODEBANC
console.log(minWindow('ADOBECODEBANC', 'ABC'))
