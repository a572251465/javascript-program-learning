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
var isCompleteTree = function (root) {
  let size = 0
  let maxCode = 0

  function recursive(root, index) {
    if (root === null) return

    size += 1
    maxCode = Math.max(maxCode, index)
    recursive(root.left, index * 2)
    recursive(root.right, index * 2 + 1)
  }
  recursive(root, 1)
  return size === maxCode
}
