/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head

  let len = 0
  let curr = head
  // 用来获取链表的长度
  while (curr) {
    curr = curr.next
    len++
  }

  // 如果移动的个数 跟链表长度相等 直接返回head
  if (k % len === 0) return head

  // 如果链表长度 < 移动的数 用余运算符的结果就是移动的个数
  k = len > k ? k : k % len
  let fast = head
  let slow = head
  // 先让快指针移动k的个数
  for (let i = 0; i < k; i++) {
    fast = fast.next
  }

  // 快以及慢指针同时移动，每次移动一个，当快指针移动到最后一位的时候 就可以把移动前后的节点分开
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  const temp = slow.next
  slow.next = null
  fast.next = head
  return temp
}
