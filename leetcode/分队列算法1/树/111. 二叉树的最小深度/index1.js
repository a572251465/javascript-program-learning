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
  if (root === null) return root

  function depth(root) {
    if (root === null) return 0

    const left = depth(root.left)
    const right = depth(root.right)

    return (left && right ? Math.min(left, right) : Math.max(left, right)) + 1
  }

  return depth(root)
}
