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
 * @return {number}
 */
var maxPathSum = function (root) {
  let dfs = Number.MIN_SAFE_INTEGER

  function next(root) {
    if (root === null) return 0

    const left = Math.max(0, next(root.left))
    const right = Math.max(0, next(root.right))

    dfs = Math.max(dfs, root.val + left + right)
    return Math.max(left, right) + root.val
  }

  next(root)
  return dfs
}
