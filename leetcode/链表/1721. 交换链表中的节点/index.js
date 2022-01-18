/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  if (head === null || head.next === null) return head

  let fast = head,
    slow = head,
    first = null,
    i = 1

  while (i++ < k) fast = fast.next
  first = fast

  while (fast && fast.next) {
    fast = fast.next
    slow = slow.next
  }

  const temp = first.val
  first.val = slow.val
  slow.val = temp

  return head
}
