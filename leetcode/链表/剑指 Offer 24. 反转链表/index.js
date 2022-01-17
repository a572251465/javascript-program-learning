/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head

  let newHead = null,
    p = head

  while(p) {
    const pre = p
    p = p.next
    pre.next = newHead
    newHead = pre
  }
  return newHead
}
