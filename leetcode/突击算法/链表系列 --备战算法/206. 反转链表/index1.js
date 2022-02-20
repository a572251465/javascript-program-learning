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
  if (head === null || head.next === null) return head

  function depth(head) {
    // -------------------------- 代码执行 --------------------------
    if (head.next === null) return head

    const newHead = depth(head.next)
    head.next.next = head
    head.next = null

    return newHead
  }
  return depth(head)
}
