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
var reverseList = function(head) {
  if (head === null) return head

  let curr = head, newHead = null
  while (curr) {
    const nextNode = curr.next
    curr.next = newHead
    newHead = curr
    curr = nextNode
  }
  return newHead
};
