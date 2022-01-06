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
