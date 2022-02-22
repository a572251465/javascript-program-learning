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
  if (root === null) return true

  function height(root) {
    if (root === null) return 0

    const leftH = isBalanced(root.left)
    const rightH = isBalanced(root.right)

    if (leftH === false || rightH === false) return false

    return Math.abs(leftH - rightH) <= 1 ? Math.max(leftH, rightH) + 1 : false
  }

  return height(root)
}
