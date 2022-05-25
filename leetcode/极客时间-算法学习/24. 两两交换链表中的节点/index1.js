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
var swapPairs = function (head) {
  if (!head) return head

  const reversal = (head) => {
    if (!head || !head.next) return head

    const newHead = head.next
    head.next = reversal(head.next)
    newHead.next = head
    return newHead
  }
}
