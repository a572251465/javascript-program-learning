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

  const hashMap = []
  let p = head

  while (p) {
    if (hashMap.includes(p)) return true

    hashMap.push(p)
    p = p.next
  }

  return false
}
