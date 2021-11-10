/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head
  const translateNode = function (head) {
    let curr = head
    let lastNode = null

    while (curr && curr.next.next) {
      curr = curr.next
    }
    lastNode = curr.next
    curr.next = null

    lastNode.next = head
    return lastNode
  }

  let newHead = head
  for (let i = 0; i < k; i++) {
    newHead = translateNode(newHead)
  }
  return newHead
}
