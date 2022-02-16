/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle || haystack.startsWith(needle)) return 0

  let i = 1
  for (; i < haystack.length; i += 1) {
    const str = haystack.slice(i)
    if (str.startsWith(needle)) return i
  }

  return -1
}
