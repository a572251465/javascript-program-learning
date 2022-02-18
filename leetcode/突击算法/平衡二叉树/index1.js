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

    const left = height(root.left)
    if (left === -1) return -1

    const right = height(root.right)
    if (right === -1) return -1

    return Math.abs(left - right) >= 2 ? -1 : Math.max(left, right) + 1
  }

  return height(root) !== -1
}
