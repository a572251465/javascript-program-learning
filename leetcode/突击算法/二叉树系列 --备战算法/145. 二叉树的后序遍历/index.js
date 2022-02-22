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
var postorderTraversal = function (root) {
  const res = []

  if (root === null) return res

  function depth(root) {
    if (root === null) return

    depth(root.left)
    depth(root.right)
    res.push(root.val)
  }
  depth(root)

  return res
}
