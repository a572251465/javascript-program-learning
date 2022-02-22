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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function depth(root) {
    if (root === null) return root

    const temp = depth(root.left)
    root.left = depth(root.right)
    root.right = temp

    return root
  }
  return depth(root)
}
