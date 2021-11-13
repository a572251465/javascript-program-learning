/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head

  const nodeStack = []
  let curr = head
  while (curr) {
    const currentVal = curr.val
    if (currentVal !== val) {
      const temp = curr
      curr = curr.next
      temp.next = null
      nodeStack.push(temp)
    } else {
      curr = curr.next
    }
  }

  if (nodeStack.length === 0) return null

  let newHead = null
  let lastNode = null
  for (let i = 0; i < nodeStack.length; i++) {
    const item = nodeStack[i]
    if (!newHead) {
      newHead = item
      lastNode = newHead
    } else {
      lastNode.next = item
      lastNode = item
    }
  }

  return newHead
}
