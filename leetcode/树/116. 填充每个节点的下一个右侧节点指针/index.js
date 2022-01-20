/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return root

  function connectTwoNode(nodeLeft, nodeRight) {
    if (nodeLeft === null || nodeRight === null) return

    nodeLeft.next = nodeRight

    // 相同父类
    connectTwoNode(nodeLeft.left, nodeLeft.right)
    connectTwoNode(nodeRight.left, nodeRight.right)

    // 不同父类
    connectTwoNode(nodeLeft.right, nodeRight.left)
  }

  connectTwoNode(root.left, root.right)
  return root
}
