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

  while (p) {
    const temp = p
    p = p.next
    temp.next = newHead
    newHead = temp
  }

  return newHead
}
