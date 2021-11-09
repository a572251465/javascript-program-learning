/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null

  let slow = head
  let fast = head

  while (true) {
    if (!fast || !fast.next) return null

    fast = fast.next.next
    slow = slow.next
    if (fast === slow) break
  }

  fast = head
  // a 从开始到入环口
  // b 环中的节点个数
  // f fast 个数
  // s slow 个数
  // f = 2s && f = s + nb
  // k = a + nb
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }
  return fast
};
