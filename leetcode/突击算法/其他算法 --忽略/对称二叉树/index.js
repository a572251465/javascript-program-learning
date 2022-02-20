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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function isCompareTree(leftRoot, rightRoot) {
    if (leftRoot === null && rightRoot === null) return true
    if (leftRoot === null || rightRoot === null) return false

    return (
      isCompareTree(leftRoot.left, rightRoot.right) &&
      isCompareTree(leftRoot.right, rightRoot.left) &&
      leftRoot.val === rightRoot.val
    )
  }
  return isCompareTree(root, root)
}
