/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return head

  // 虚拟节点
  let dummyHead = new ListNode()
  dummyHead.next = head
  let p = dummyHead

  // 当前节点/ 下个节点
  while (p.next && p.next.next) {
    // 第一个节点
    let cur = p.next
    // 第二个节点
    let after = p.next.next

    // 头节点指向第二个节点
    p.next = after
    // 将位置3节点 指向位置1的后面 保持链连接
    cur.next = after.next
    // 位置2后面 紧跟着位置1
    after.next = cur

    p = cur
  }

  return dummyHead.next
}
