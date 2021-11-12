/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return null
  if (!head.next && n === 1) return null

  let fast = head
  let slow = head

  let i = 0
  while (i++ < n) {
    fast = fast.next
  }

  if (!fast) return head.next

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return head
}
