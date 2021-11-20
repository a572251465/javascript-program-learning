/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return head

  let newHead = null,
    lastNode = null,
    curr = head,
    cacheArr = [],
    pre = null

  while (curr) {
    const val = curr.val
    if (val < x) {
      const currentNode = curr
      pre = curr.next
      currentNode.next = null
      cacheArr.push(currentNode)
    } else {
      if (!newHead) {
        lastNode = newHead = curr
        pre = curr.next
        newHead.next = null
      } else {
        lastNode.next = curr
        pre = curr.next
        curr.next = null
        lastNode = lastNode.next
      }
    }
    curr = pre || curr.next
    pre = null
  }

  cacheArr = cacheArr.concat(newHead)
  newHead = null
  lastNode = null
  let item
  while ((item = cacheArr.shift())) {
    if (!newHead) {
      newHead = lastNode = item
    } else {
      lastNode.next = item
      lastNode = lastNode.next
    }
  }

  return newHead
}
