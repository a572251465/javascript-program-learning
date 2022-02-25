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
var maxDepth = function (root) {
  if (root === null) return 0
  if (root.left === null && root.right === null) return 1

  const left = maxDepth(root.left)
  const right = maxDepth(root.right)

  return Math.max(left, right) + 1
}
