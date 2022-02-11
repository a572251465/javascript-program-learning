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
  if (head === null) return head

  let p = head, len = 0
  while(p) {
    p = p.next
    len ++
  }
  if (len === n) return head.next

  let fast = head
  let slow = head

  while (n-- > 0) fast = fast.next

  while (fast && fast.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next
  return head
}
