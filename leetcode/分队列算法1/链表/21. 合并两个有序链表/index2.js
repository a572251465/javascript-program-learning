/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode(-1)
  let p = dummy,
    p1 = l1,
    p2 = l2

  while (p1 !== null && p2 !== null) {
    const val1 = p1.val,
      val2 = p2.val

    if (val1 > val2) {
      p.next = p2
      p2 = p2.next
    } else {
      p.next = p1
      p1 = p1.next
    }
    p = p.next
  }

  if (p1) p.next = p1
  if (p2) p.next = p2

  return dummy.next
}
