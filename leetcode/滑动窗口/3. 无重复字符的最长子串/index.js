/**
 * @param {string} s
 * @return {number}
 */

function maxStr(arr = []) {
  const exist = []
  for (let i = 0; i < arr.length; i += 1) {
    if (exist.includes(arr[i])) return exist.length
    exist.push(arr[i])
  }

  return exist.length
}

var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length

  let max = 0
  const arr = s.split('')
  let i = 0

  for (; i < arr.length - 1; i += 1) {
    if (arr[i] === arr[i + 1]) continue
    const res = maxStr(arr.slice(i))
    max = Math.max(max, res)
  }

  return max === 0 ? 1 : max
}

console.log(lengthOfLongestSubstring('pwwkew'))
