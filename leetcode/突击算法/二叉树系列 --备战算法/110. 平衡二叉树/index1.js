/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function height(root) {
    if (root === null) return 0

    const leftH = height(root.left)
    if (leftH === -1) return leftH

    const rightH = height(root.right)
    if (rightH === -1) return rightH

    return Math.abs(leftH - rightH) <= 1 ? Math.max(leftH, rightH) + 1 : -1
  }

  return height(root) !== -1
}
