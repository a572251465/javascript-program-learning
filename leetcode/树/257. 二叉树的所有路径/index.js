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
    input.push(node.val)

    if (node.left === null && node.right === null) {
      sum.push(input.join("->"))
      return false
    }

    next(node.left, input)
    if (node.left) input.pop()
    next(node.right, input)
    if (node.right) input.pop()
  }
  next(root, [])
  return sum
};
