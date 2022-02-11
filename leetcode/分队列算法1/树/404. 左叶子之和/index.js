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
  let sum = 0

  function next(root) {
    if (root === null) return null

    if (root.left !== null && root.left.left === null && root.left.right === null) {
      sum += +root.left.val
    }
    next(root.left)
    next(root.right)
  }
  next(root)
  return sum
}
