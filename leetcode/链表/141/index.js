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
var hasCycle = function (head) {
  if (!head || !head.next) return false

  // 利用快慢指针  如果存在闭环，就一定会相遇的
  let slow = head
  let fast = head.next

  while (fast && fast.next) {
    if (fast === slow) return true

    fast = fast.next.next
    slow = slow.next
  }

  return false
}
