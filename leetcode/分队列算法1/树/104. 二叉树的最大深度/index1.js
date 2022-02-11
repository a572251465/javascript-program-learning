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
var maxDepth = function (root) {
  if (root === null) return 0

  let max = Number.MIN_SAFE_INTEGER,
    depth = 0
  function depthHandle(root) {
    if (root === null) {
      max = Math.max(max, depth)
      return
    }

    depth++
    depthHandle(root.left)
    depthHandle(root.right)
    depth--
  }

  depthHandle(root)
  return max
}
