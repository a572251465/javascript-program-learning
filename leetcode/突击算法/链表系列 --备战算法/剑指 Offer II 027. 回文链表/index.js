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
  if (head === null) return false

  let p = head

  function depth(head) {
    if (head.next === null) {
      const res = head.val === p.val
      p = p.next
      return res
    }

    const res = depth(head.next)
    if (res === false) return false

    const somes = head.val === p.val
    p = p.next
    return somes
  }

  return depth(head)
}
