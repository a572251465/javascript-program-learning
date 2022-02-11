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
var reverseList = function (head) {
  if (!head) return head

  function reverse(head) {
    if (head.next === null) return head

    const newHead = reverse(head.next)
    head.next.next = head
    head.next = null
    return newHead
  }
  return reverse(head)
}
