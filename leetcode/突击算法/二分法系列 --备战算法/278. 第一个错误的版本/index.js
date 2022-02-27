/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1,
      end = n

    while (start <= end) {
      // 1. 先判断中间版本是否是错误的版本
      const mid = (start + (end - start) / 2) | 0
      const status = isBadVersion(mid)

      if (status === true) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }

    return start
  }
}
