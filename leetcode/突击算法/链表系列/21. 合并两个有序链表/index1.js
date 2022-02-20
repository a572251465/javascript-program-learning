/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2
  if (list2 === null) return list1

  const dummy = new ListNode(-1)
  let p1 = list1,
    p2 = list2,
    cur = dummy

  while (p1 && p2) {
    const { val: val1 } = p1,
      { val: val2 } = p2

    if (val1 < val2) {
      cur.next = p1
      p1 = p1.next
      cur = cur.next
    } else {
      cur.next = p2
      p2 = p2.next
      cur = cur.next
    }
  }

  if (p1) cur.next = p1
  if (p2) cur.next = p2

  return dummy.next
}
