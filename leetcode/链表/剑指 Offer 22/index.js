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
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  if (k === 0 || !head) return null

  let slow = head
  let fast = head
  while (k-- > 0) {
    fast = fast.next
  }

  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}
