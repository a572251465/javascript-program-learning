/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return null

  function reverse(head) {
    let newHead = null,
      p1 = head

    while (p1) {
      const temp = p1
      p1 = p1.next
      temp.next = newHead
      newHead = temp
    }

    return newHead
  }

  let fast = head,
    slow = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  if (fast !== null) slow = slow.next

  slow = reverse(slow)
  fast = head
  while (slow) {
    if (slow.val !== fast.val) return false
    slow = slow.next
    fast = fast.next
  }

  return true
}
