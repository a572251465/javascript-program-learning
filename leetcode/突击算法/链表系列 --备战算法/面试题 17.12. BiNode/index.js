/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function (root) {
  if (root === null) return root

  let minNode = null

  function reverseInorder(root) {
    if (root === null) return null

    reverseInorder(root.right)
    root.right = minNode

    minNode = root

    reverseInorder(root.left)
    root.left = null
  }

  reverseInorder(root)
  return minNode
}
