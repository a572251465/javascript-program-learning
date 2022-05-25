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

  // 1 2 3
  const reversal = (head) => {
    if (!head || !head.next) return head

    const newHead = reversal(head.next)
    head.next.next = head
    head.next = null

    return newHead
  }
  return reversal(head)
}
