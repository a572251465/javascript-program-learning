/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if ((root.val - p.val) * (root.val - q.val) <= 0) return root
  return lowestCommonAncestor(p.val - root.val < 0 ? root.left : root.right, p, q)
};
