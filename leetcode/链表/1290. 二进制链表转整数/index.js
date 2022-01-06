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
  let p = head,
    str = ''
  while (p) {
    str += p.val
    p = p.next
  }

  return parseInt(str, 2)
}
