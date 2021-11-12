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
var reverseBetween = function(head, left, right) {
  // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  // left 2 right 4
  let pre = dummyNode;
  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  // 建议写在 for 循环里，语义清晰
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  // pre => 1,2,3,4,5

  // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }
  // rightNode => 4, 5

  // 第 3 步：切断出一个子链表（截取链表）
  let leftNode = pre.next; // leftNode => 2,3,4,5
  let curr = rightNode.next; // curr => 5

  // 注意：切断链接
  pre.next = null; // pre => 1
  rightNode.next = null; // rightNode === leftNode 2, 3, 4

  // 第 4 步：同第 206 题，反转链表的子区间
  reverseLinkedList(leftNode); // 反转

  // 第 5 步：接回到原来的链表中
  pre.next = rightNode;
  leftNode.next = curr;
  return dummyNode.next;
};

const reverseLinkedList = (head) => {
  let pre = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
}
