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
  // [1, 2, 3, 4, 5]
  if (!head) return head

  let p = head
  let newHead = null

  while (p) {
    const cur = p
    p = p.next
    cur.next = newHead
    newHead = cur
  }

  return newHead
}
