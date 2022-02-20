/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // -------------------------- 变量定义区域 --------------------------
  let p = head
  const res = []

  // -------------------------- 代码执行区域 --------------------------
  while (p) {
    res.push(p.val)
    p = p.next
  }

  let left = 0,
    right = res.length - 1
  // 1 2 2 1
  // 1 2 3 2 1
  while (left < right) {
    if (res[left] !== res[right]) return false
    left++
    right--
  }

  return true
}
