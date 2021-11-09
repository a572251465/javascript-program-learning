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
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/submissions/
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head

  let cur = head
  while (cur && cur.next) {
    // 当前节点的值
    const currentVal = cur.val
    // 下一个节点的值
    const nextVal = cur.next.val

    // 判断是否重复
    if (currentVal === nextVal) {
      // 因为是对象 所以next引用类型 修改next的值 其实是修改head的值
      cur.next = cur.next.next
    } else {
      // 修改cur的指向
      cur = cur.next
    }
  }

  return head
};

// 1 1 2
// 2 3 4 4 5
// 1 1 2 3 3
