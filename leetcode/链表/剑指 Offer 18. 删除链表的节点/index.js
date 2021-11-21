/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let newHead = new ListNode(-1, head)

  let curr = newHead
  while (curr && curr.next) {
    const { val: x } = curr.next
    if (x === val) {
      curr.next = curr.next.next
    }
    curr = curr.next
  }

  return newHead.next
}
