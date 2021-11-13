/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (!head) return []
  if (!head.next) return [head.val]

  const arr = []
  function next(newHead) {
    if (!newHead) return
    next(newHead.next)
    arr.push(newHead.val)
  }
  next(head)

  return arr
}
