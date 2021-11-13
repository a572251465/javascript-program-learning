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

const { LinkedList } = require('../手写链表/index')

// https://leetcode-cn.com/problems/palindrome-linked-list/
var isPalindrome = function (head) {
  if (!head) return false
  if (!head.next) return true

  let len = 0
  let curr = head
  while (curr) {
    len++
    curr = curr.next
  }

  let fast = head
  let slow = head
  let step = len % 2 === 0 ? len / 2 : Math.floor(len / 2) + 1
  // 1 2 3 2 1
  while (step-- > 0) {
    fast = fast.next
  }

  let stack = []
  while (fast) {
    stack.push(fast.val)
    fast = fast.next
  }

  stack = stack.reverse()
  let item = null
  while ((item = stack.shift()) !== undefined) {
    if (item !== slow.val) return false
    slow = slow.next
  }
  return true
}

const l1 = new LinkedList()
l1.add(1)
l1.add(0)
l1.add(0)
console.log(isPalindrome(l1.head))
