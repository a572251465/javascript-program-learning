/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const getPreNode = (head, k) => {
    let p1 = head,
      p2 = head

    while (k-- > 0) p1 = p1.next

    while (p1) {
      p1 = p1.next
      p2 = p2.next
    }

    return p2
  }

  const dummy = new ListNode(-1)
  dummy.next = head

  const pre = getPreNode(dummy, n + 1)
  pre.next = pre.next.next

  return dummy.next
}
