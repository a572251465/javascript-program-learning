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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let ans = 1

  function depth(root) {
    if (root === null) return 0

    const l = depth(root.left)
    const r = depth(root.right)
    ans = Math.max(ans, l + r + 1)
    return Math.max(l, r) + 1
  }
  depth(root)
  return ans - 1
};
