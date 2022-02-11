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
  if (!root) return 0

  function next(root) {
    if (root === null) return 0

    const left = next(root.left)
    const right = next(root.right)
    return (root.left && root.right ? Math.min(left, right) : Math.max(left, right)) + 1
  }
  return next(root)
}
