/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) return null

  let p = head

  while (p.next) {
    const preVal = p.next.val
    if (preVal === val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head.val === val ? head.next : head
}
