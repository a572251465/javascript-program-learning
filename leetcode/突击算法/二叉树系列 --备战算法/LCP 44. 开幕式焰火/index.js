/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var numColor = function (root) {
  if (root === null) return 0

  const set = new Set()

  function dfs(root) {
    if (root === null) return

    set.add(root.val)
    dfs(root.left)
    dfs(root.right)
  }

  dfs(root)

  return set.size
}
