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

  function isBalanceTree(root) {
    if (root === null) return 0

    const left = isBalanceTree(root.left)
    const right = isBalanceTree(root.right)

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1
    } else {
      return Math.max(left, right) + 1
    }
  }

  return isBalanceTree(root) > 0
}
