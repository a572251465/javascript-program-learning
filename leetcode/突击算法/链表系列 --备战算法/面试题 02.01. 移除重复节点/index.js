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
  if (head === null || head.next === null) return head

  const existArr = [],
    dummy = new ListNode(-1, head)
  let p = dummy

  while (p && p.next) {
    const { val } = p.next
    if (!existArr.includes(val)) {
      existArr.push(val)
      p = p.next
    } else {
      p.next = p.next.next
    }
  }

  return dummy.next
}
