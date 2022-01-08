/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p && q === null) return false
  if (p === null && q) return false
  if (p === null && q === null) return true

  const left = isSameTree(p.left, q.left)
  const right = isSameTree(p.right, q.right)

  return left && right && p.val === q.val
}
