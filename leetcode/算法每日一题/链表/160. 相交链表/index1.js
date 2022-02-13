/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null

  const hashMap = []
  let p = headA,
    p1 = headB

  while (p) {
    hashMap.push(p)
    p = p.next
  }

  while (p1) {
    if (hashMap.includes(p1)) return p1

    p1 = p1.next
  }

  return null
}
