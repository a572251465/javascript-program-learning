/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { LinkedList } = require('../手写链表/index')

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2
  } else if (!l2) {
    return l1
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
// 1 2 4
// 1 3 4

const l1 = new LinkedList()
l1.add(1)
l1.add(2)
l1.add(4)

const l2 = new LinkedList()
l2.add(1)
l2.add(3)
l2.add(4)

console.log(mergeTwoLists(l1.head, l2.head))
