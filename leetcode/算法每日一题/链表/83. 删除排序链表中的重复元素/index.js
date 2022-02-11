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
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head

  let p = head

  while (p && p.next) {
    const { val: cur } = p,
      { val: next } = p.next

    if (cur === next) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }

  return head
}
