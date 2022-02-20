/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false

  const hasSet = new WeakSet()
  let p = head

  while (p) {
    if (hasSet.has(p)) return true

    hasSet.add(p)
    p = p.next
  }

  return false
}
