/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null

  const hashMap = []
  let p = head
  while (p) {
    if (hashMap.includes(p)) return p
    hashMap.push(p)
    p = p.next
  }

  return null
}
