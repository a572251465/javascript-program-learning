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
var sumOfLeftLeaves = function(root) {
  const sum = []

  function next(node, flag) {
    if (!node) return false
    if (flag && node.left === null && node.right === null) sum.push(node.val)

    next(node.left, true)
    next(node.right, false)
  }
  next(root, false)

  return sum.reduce((pre, cur) => pre + cur, 0)
};
