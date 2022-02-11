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
var deleteDuplicates = function (h) {
  if (h === null || h.next === null) return h

  const has = [h.val]
  let p = h

  while (p && p.next) {
    const { val } = p.next

    if (!has.includes(val)) {
      has.push(val)
      p = p.next
      continue
    }

    p.next = p.next.next
  }

  return h
}
