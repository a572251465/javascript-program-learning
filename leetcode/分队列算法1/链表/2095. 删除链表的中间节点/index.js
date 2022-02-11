/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (head === null || head.next === null) return null

  let p1 = head, p2 = head, pre = null
  while(p2 && p2.next) {
    p2 = p2.next.next
    pre = p1
    p1 = p1.next
  }

  pre.next = pre.next.next
  return head
}
