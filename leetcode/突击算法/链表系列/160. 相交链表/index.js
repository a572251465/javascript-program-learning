/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p = headA,
    p1 = headB

  while (p !== p1) {
    p = p ? p.next : headB
    p1 = p1 ? p1.next : headA
  }

  return p
}
