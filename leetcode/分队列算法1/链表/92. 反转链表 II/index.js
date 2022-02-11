/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let surplusNode = null

  function reverseN(head, n) {
    if (n === 1) {
      surplusNode = head.next
      return head
    }

    const newHead = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = surplusNode
    return newHead
  }

  if (left === 1) {
    return reverseN(head, right)
  }

  head.next = reverseBetween(head.next, left - 1, right - 1)
  return head
}
