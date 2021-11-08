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
    const currentVal = cur.val
    const nextVal = cur.next.val

    if (currentVal === nextVal) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
};

// 1 1 2
// 2 3 4 4 5
// 1 1 2 3 3
