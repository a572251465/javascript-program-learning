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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false

  // 次处判断是否是叶子节点(没有子节点的元素就是叶子节点)
  if (!root.left && !root.right) return root.val === targetSum

  const surplus = targetSum - root.val
  return hasPathSum(root.left, surplus) || hasPathSum(root.right, surplus)
}
