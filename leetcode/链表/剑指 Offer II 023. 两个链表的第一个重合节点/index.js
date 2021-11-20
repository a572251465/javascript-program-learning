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
  let slow = headA,
    fast = headB

  while (slow !== fast) {
    slow = slow ? slow.next : headB
    fast = fast ? fast.next : headA
  }

  return slow
}
