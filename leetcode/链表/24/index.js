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
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
var swapPairs = function (head) {
  if (!head || !head.next) return head

  /**
   * 假如节点：1，2，3，4，5，6，7，8
   * newHead.next 3 5 7
   */

  /**
   *1 2
   * head = 1
   * newHead = head.next
   * head.next.next = head
   * head.next = null
   */

  const newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
}
