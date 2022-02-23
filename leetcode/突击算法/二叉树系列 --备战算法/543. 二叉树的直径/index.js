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
var diameterOfBinaryTree = function (root) {
  if (root == null) return 0

  let diff = Number.MIN_SAFE_INTEGER
  function depth(root) {
    if (root == null) return 0

    const leftH = depth(root.left)
    const rightH = depth(root.right)

    const max = Math.max(leftH, rightH) + 1
    diff = Math.max(leftH + rightH, diff)

    return max
  }

  depth(root)

  return diff
}
