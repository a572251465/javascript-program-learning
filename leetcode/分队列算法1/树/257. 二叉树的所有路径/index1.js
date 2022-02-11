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
 var binaryTreePaths = function (root) {
  if (root.left === null && root.right === null) return [root.val + '']

  const result = []
  function next(root, path = '') {
    if (root === null) return

    path += root.val
    if (root.left === null && root.right === null) {
      result.push(path)
      return
    }

    path += '->'
    next(root.left, path)
    next(root.right, path)
  }
  next(root)
  return result
}
