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
var removeDuplicateNodes = function (head) {
  if (!head) return head

  const cacheArr = []
  let curr = head
  let pre = head
  while (curr) {
    const val = curr.val
    if (cacheArr.includes(val)) {
      pre.next = pre.next.next
      curr = curr.next
    } else {
      cacheArr.push(val)
      pre = curr
      curr = curr.next
    }
  }

  return head
}
