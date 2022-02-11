/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 === null) return l1
  if (l1 === null) return l2
  if (l2 === null) return l1

  let head, currentNode
  while (l1 && l2) {
    const p1 = l1.val
    const p2 = l2.val

    if (p1 < p2) {
      if (!head) {
        head = currentNode = l1
      } else {
        currentNode.next = l1
        currentNode = currentNode.next
      }
      l1 = l1.next
    } else {
      if (!head) {
        head = currentNode = l2
      } else {
        currentNode.next = l2
        currentNode = currentNode.next
      }
      l2 = l2.next
    }
  }

  if (l1) currentNode.next = l1
  if (l2) currentNode.next = l2

  return head
}
