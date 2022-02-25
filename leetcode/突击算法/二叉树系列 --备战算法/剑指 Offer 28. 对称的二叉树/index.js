/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true

  function isSameTree(leftRoot, rightRoot) {
    if (leftRoot === null && rightRoot === null) return true
    if (leftRoot === null || rightRoot === null) return false

    return (
      leftRoot.val === rightRoot.val &&
      isSameTree(leftRoot.left, rightRoot.right) &&
      isSameTree(leftRoot.right, rightRoot.left)
    )
  }

  return isSameTree(root, root)
}
