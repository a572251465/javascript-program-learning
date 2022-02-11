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
var getMinimumDifference = function (root) {
  if (!root) return 0

  let diff = Number.MAX_SAFE_INTEGER,
    pre = -1
  function dfs(root) {
    if (root === null) return

    dfs(root.left)
    if (pre === -1) {
      pre = root.val
    } else {
      diff = Math.min(diff, root.val - pre)
      pre = root.val
    }
    dfs(root.right)
  }
  dfs(root)
  return diff
}
