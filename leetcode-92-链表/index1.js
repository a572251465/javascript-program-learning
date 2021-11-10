/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// https://leetcode-cn.com/problems/reverse-linked-list-ii/
  // 1 2 3 4 5 6
var reverseBetween = function(head, left, right) {
  if (!head || !head.next) return head
  if (left === right) return head
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;

  let leftNode = dummyNode
  let rightNode = null

  // 开始位置的前一个坐标
  for (let i = 0; i < left - 1; i ++) {
    leftNode = leftNode.next
  }

  rightNode = leftNode
  // 结束位置的坐标
  for (let i = 0; i < (right - left + 1); i ++) {
    rightNode = rightNode.next
  }


  // 进行截尾 拆除子链
  let curr = leftNode.next
  let temp = rightNode.next
  rightNode.next = null
  leftNode.next = null
  rightNode = temp

  // 子链反转
  let newHead = null
  let i = 0
  while (curr) {
    i ++
    const temp = curr.next
    curr.next = newHead
    newHead = curr
    if (i === 1) newHead.next = rightNode
    curr = temp
  }

  leftNode.next = newHead
  return left === 1 ? leftNode.next : leftNode
}
