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
  if (!headA || !headB) return null

  let curr = headA
  let curr1 = headB
  while (curr !== curr1) {
    curr = curr ? curr.next : headB
    curr1 = curr1 ? curr1.next : headA
  }

  return curr1
}
