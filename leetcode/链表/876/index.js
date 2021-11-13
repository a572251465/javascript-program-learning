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
var middleNode = function (head) {
  if (!head || !head.next) return head
  let len = 0
  let curr = head

  while (curr) {
    len++
    curr = curr.next
  }
  len = Math.floor(len / 2)

  // 1 2
  // 1 2 3
  // 1 2 3 4
  curr = head
  while (len-- > 0) {
    curr = curr.next
  }

  return curr
}
