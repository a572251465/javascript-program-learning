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
  function next(root, values = []) {
    if (root === null) return
    values.push(root.val)

    if (root.left === null && root.right === null) {
      result.push(values.join('->'))
      values.pop()
      return
    }

    next(root.left, values)
    next(root.right, values)
    values.pop()
  }
  next(root, [])

  return result
}
