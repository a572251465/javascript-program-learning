/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s = '') {
  // 表示不重复的元素数组
  let set = []
  // 表示最大的长度 一旦出现重复开始变幻
  let maxLen = 0

  for (let i = 0; i < s.length; i += 1) {
    const value = s[i]

    // 如果一直没有重复的 就一直添加
    if (!set.includes(value)) {
      set.push(value)
    } else {
      // 走到这个分支 表示此时字符串重复

      // 获取最大长度
      maxLen = Math.max(maxLen, set.length)
      // 获取那个重复节点
      const index = set.indexOf(value)
      // 删除掉之前重复的节点
      set.splice(0, index + 1)
      // 添加上不本次节点
      set.push(value)
    }
  }

  return Math.max(maxLen, set.length)
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('dvdf'))
console.log(lengthOfLongestSubstring('aabaab!bb'))
