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

  function reverse(head) {
    if (head === null || head.next === null) return head

    // 1 2
    const newHead = reverse(head.next)
    head.next.next = head
    head.next = null
    return newHead
  }
  return reverse(head)
}
