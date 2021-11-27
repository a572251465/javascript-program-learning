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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const sum = []

  function next(node, input) {
    if (!node) return false
    input += node.val.toString()

    if (node.left === null && node.right === null) {
      sum.push(input)
      return false
    }

    input += "->"
    next(node.left, input)
    next(node.right, input)
  }
  next(root, "")
  return sum
};
