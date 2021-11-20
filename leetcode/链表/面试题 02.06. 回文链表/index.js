/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let outerHead = head
  function next(newHead) {
    if (!newHead) return true
    const flag = next(newHead.next)
    if (!flag) return flag
    const status = outerHead.val === newHead.val
    if (status) {
      outerHead = outerHead.next
      return true
    }
    return false
  }
  return next(head)
}
