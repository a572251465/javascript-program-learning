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
var minDepth = function (root) {
  if (root === null) return 0
  if (root.left === null && root.right === null) return 1

  const leftDepth = minDepth(root.left)
  const rightDepth = minDepth(root.right)

  return (
    (leftDepth && rightDepth
      ? Math.min(leftDepth, rightDepth)
      : leftDepth || rightDepth) + 1
  )
}
