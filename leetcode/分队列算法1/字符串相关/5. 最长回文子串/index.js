/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length

  if (len <= 1) return s

  if ([...new Set(s.split(''))].length === 1) return s

  let maxLen = 1,
    begin = 0
  const dp = new Array()
  for (let i = 0; i < len; i += 1) {
    dp[i] = new Array()
    for (let j = 0; j < len; j += 1) {
      dp[i][j] = false
    }
  }

  for (let i = 0; i < len; i += 1) dp[i][i] = true

  for (let l = 2; l <= len; l += 1) {
    for (let i = 0; i < len; i += 1) {
      let j = l + i - 1
      if (j >= len) break

      if (s.charAt(i) !== s.charAt(j)) {
        dp[i][j] = false
        continue
      }

      if (j - i < 3) {
        dp[i][j] = true
      } else {
        dp[i][j] = dp[i + 1][j - 1]
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }

  return s.substring(begin, begin + maxLen)
}

console.log(longestPalindrome('abb'))
