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
var isSymmetric = function(root) {
  const isSame = (node1, node2) => {
    if (node1 === null && node2 === null) return true
    if (node1 === null || node2 === null) return  false

    return node1.val === node2.val && isSame(node1.left, node2.right) && isSame(node1.right, node2.left)
  }
  return isSame(root, root)
};
