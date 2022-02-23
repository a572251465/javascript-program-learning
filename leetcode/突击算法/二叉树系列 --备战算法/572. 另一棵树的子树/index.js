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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSameTree(p, q) {
  return (
    p === q ||
    (p !== null &&
      q !== null &&
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right))
  )
}

var isSubtree = function (root, subRoot) {
  if (root === null) return false

  if (root.val === subRoot.val && isSameTree(root, subRoot)) return true

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}
