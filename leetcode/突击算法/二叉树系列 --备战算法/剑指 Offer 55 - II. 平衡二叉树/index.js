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

  function dfs(root) {
    if (root === null) return 0
    if (root.left === null && root.right === null) return 1

    const left = dfs(root.left)
    if (left === false) return false

    const right = dfs(root.right)
    if (right === false) return false

    if (Math.abs(left - right) > 1) return false

    return Math.max(left, right) + 1
  }

  return !!dfs(root)
}
