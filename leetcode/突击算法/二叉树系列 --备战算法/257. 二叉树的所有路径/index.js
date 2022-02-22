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
  const res = []
  if (root === null) return res

  function depth(root, toPath) {
    if (root === null) return
    toPath = toPath ? `${toPath}->` : toPath

    if (root.left === null && root.right === null) {
      toPath = `${toPath}${root.val}`
      res.push(toPath)
      return
    }

    depth(root.left, `${toPath}${root.val}`)
    depth(root.right, `${toPath}${root.val}`)
  }

  depth(root, ``)
  return res
}
