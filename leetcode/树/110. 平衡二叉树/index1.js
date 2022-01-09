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
  if (!root) return true

  function next(root) {
    if (root === null) return 0

    const left = next(root.left)
    const right = next(root.right)

    if (left === false || right === false || Math.abs(left - right) > 1) return false
    return Math.max(left, right) + 1
  }

  return next(root)
}
