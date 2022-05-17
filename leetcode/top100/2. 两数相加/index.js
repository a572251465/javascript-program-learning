/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummyNode = new ListNode(-1)
  let res = dummyNode
  let surplus = 0

  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0
    const v2 = l2 ? l2.val : 0

    const sum = surplus + v1 + v2
    surplus = sum >= 10 ? 1 : 0
    const result = sum % 10

    res.next = new ListNode(result)
    res = res.next

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (surplus > 0) res.next = new ListNode(surplus)

  return dummyNode.next
}
