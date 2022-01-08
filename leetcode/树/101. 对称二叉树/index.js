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
 * @return {boolean}
 */
var isSymmetric = function (root) {

  function symmetric(left, right) {
    if (left === null && right === null) return true
    if (left === null || right === null) return false

    const leftNode = symmetric(left.left, right.right)
    const rightNode = symmetric(left.right, right.left)
    return leftNode && rightNode && left.val === right.val
  }
  return symmetric(root, root)
}
