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
  if (root === null) return null

  const res = (root.val - p.val) * (root.val - q.val)
  if (res <= 0) return root

  return lowestCommonAncestor(root.val < p.val ? root.right : root.left, p, q)
}
