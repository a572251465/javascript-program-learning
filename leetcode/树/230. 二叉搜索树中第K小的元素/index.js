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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let value = null

  function depth(root) {
    if (root === null) return null

    depth(root.left)
    if (k-- === 1) value = root.val
    depth(root.right)
  }
  depth(root)

  return value
}
