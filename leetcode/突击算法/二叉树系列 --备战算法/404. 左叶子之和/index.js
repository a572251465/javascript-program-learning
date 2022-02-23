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
var sumOfLeftLeaves = function (root) {
  if (root === null) return 0

  let sum = 0
  function depth(root) {
    if (root === null) return

    depth(root.right)
    if (root.left && root.left.left === null && root.left.right === null) {
      sum += root.left.val
    }
    depth(root.left)
  }
  depth(root)

  return sum
}
