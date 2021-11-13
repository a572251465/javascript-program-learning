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
  if (!head) return false
  if (!head.next) return true

  let curr = head
  const stack = []
  while (curr) {
    stack.push(curr.val)
    curr = curr.next
  }

  const len = Math.floor(stack.length / 2)
  for (let i = 0; i < len; i++) {
    if (stack[i] !== stack[stack.length - i - 1]) return false
  }
  return true
}
