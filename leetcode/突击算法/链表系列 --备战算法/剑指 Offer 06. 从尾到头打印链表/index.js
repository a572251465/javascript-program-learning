/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (head === null) return []

  const res = []

  function depth(head) {
    if (head === null) return head

    depth(head.next)
    res.push(head.val)
  }
  depth(head)
  return res
}
