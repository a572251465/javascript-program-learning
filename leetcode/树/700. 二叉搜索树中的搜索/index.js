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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return null
  if (root.val === val) return root

  let curr = root
  while (curr) {
    const {val: nodeVal} = curr
    if (nodeVal === val) return curr
    const diff = nodeVal - val > 0
    curr = diff ? curr.left : curr.right
  }

  return null
};
