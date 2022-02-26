/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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

    const left = height(root.left)
    const right = height(root.right)

    if (left === -1) return -1
    if (right === -1) return -1

    if (Math.abs(left - right) > 1) return -1

    return Math.max(left, right) + 1
  }

  return height(root) !== -1
}
