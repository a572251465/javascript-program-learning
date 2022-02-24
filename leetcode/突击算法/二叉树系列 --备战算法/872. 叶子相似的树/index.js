/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  if (root2 === null) return false

  let str = [],
    str1 = []

  function depth(root, arr = []) {
    if (root === null) return

    if (root.left === null && root.right === null) {
      arr.push(root.val)
    } else {
      if (root.left) depth(root.left, arr)
      if (root.right) depth(root.right, arr)
    }
  }

  depth(root1, str)
  depth(root2, str1)

  return str.toString() === str1.toString()
}
