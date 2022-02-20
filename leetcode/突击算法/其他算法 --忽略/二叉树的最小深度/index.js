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

  if (!root.left && !root.right) return 1

  const left = minDepth(root.left),
    right = minDepth(root.right)
  return (left && right ? Math.min(left, right) : (left || right)) + 1
}
