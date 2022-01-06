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
// https://leetcode-cn.com/problems/palindrome-linked-list/
var isPalindrome = function (head) {
  if (head === null) return false
  if (head.next === null) return true

  let p = head
  let p1 = head

  function next(head) {
    if (head === null) return true
    const state = next(head.next)
    if (state === false) return false

    const val = head.val
    const val1 = p1.val
    p1 = p1.next
    return val === val1
  }
  return next(p)
}
