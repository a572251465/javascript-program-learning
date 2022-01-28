/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length

  const map = {}
  let max = 0,
    left = 0,
    i = 0

  for (; i < s.length; i += 1) {
    const item = s.charAt(i)
    if (Reflect.has(map, item)) {
      left = Math.max(left, map[item] + 1)
    }
    map[item] = i
    max = Math.max(max, i - left + 1)
  }

  return max
}

console.log(lengthOfLongestSubstring('pwwkew'))
