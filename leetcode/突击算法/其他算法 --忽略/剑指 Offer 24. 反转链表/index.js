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
var reverseList = function (head) {
  if (head === null) return null

  let newHead = null
  while (head) {
    const temp = head
    head = head.next
    temp.next = newHead
    newHead = temp
  }

  return newHead
}
