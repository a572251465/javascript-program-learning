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
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return null

  while ((root.val - p.val) * (root.val - q.val) > 0) {
    root = root.val < p.val ? root.right : root.left
  }

  return root
}
