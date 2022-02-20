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

  // -------------------------- 变量定义区域 --------------------------
  let newHead = null,
    p = head

  // -------------------------- 代码执行区域 --------------------------
  while (p) {
    const temp = p
    p = p.next
    temp.next = newHead
    newHead = temp
  }

  return newHead
}
