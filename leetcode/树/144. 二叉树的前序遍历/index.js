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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (root === null) return []

  const values = []
  function next(root) {
    if (root === null) return

    values.push(root.val)
    next(root.left)
    next(root.right)
  }
  next(root)
  return values
}
