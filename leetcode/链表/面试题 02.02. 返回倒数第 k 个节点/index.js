/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  if (head === null) return head

  let p1 = head,
    p2 = head

  while (k-- > 0) p1 = p1.next

  while (p1 !== null) {
    p1 = p1.next
    p2 = p2.next
  }

  return p2.val
}
