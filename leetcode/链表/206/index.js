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
var reverseList = function(head) {
  if (!head) return head

  let newHed = null
  while (head) {
    const nextNode = head.next
    head.next = newHed
    newHed = head
    head = nextNode
  }

  return newHed
};
