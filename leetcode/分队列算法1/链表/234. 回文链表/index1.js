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

  const stack = []
  let p = head
  while (p) {
    stack.push(p.val)
    p = p.next
  }

  return stack.join('') === stack.reverse().join('')
}
