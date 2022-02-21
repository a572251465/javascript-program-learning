/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  if (head === null) return 0

  let res = '',
    p = head

  while (p) {
    res = res + p.val
    p = p.next
  }

  return parseInt(res, 2)
}
