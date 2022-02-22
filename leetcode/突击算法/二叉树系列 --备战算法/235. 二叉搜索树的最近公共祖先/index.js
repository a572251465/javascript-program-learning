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
  if (root === null) return root

  // 对于二叉搜索树而言 任意一个根节点都是 对于左子树而言都是最大值 对于右子树而言都是最大的
  const res = (root.val - p.val) * (root.val - q.val)
  if (res <= 0) return root

  return lowestCommonAncestor(root.val > p.val ? root.left : root.right, p, q)
}
