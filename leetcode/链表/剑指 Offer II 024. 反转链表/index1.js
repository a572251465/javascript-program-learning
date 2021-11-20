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
var reverseList = function (head) {
  if (!head) return head

  let curr = head,
    newHead = null
  while (curr) {
    const currentNode = curr
    curr = curr.next
    currentNode.next = newHead
    newHead = currentNode
  }

  return newHead
}
