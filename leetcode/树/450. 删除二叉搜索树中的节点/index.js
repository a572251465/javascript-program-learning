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
 * @param {number} key
 * @return {TreeNode}
 */

function getMin(root) {
  while (root.left !== null) root = root.left
  return root
}

var deleteNode = function (root, key) {
  if (root === null) return null

  if (root.val === key) {
    if (root.left === null && root.right === null) return null
    if (root.left === null) return root.right
    if (root.right === null) return root.left

    // 获取右子树中最小节点
    const minNode = getMin(root.right)
    root.right = deleteNode(root.right, minNode.val)
    minNode.left = root.left
    minNode.right = root.right
    root = minNode
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else {
    root.right = deleteNode(root.right, key)
  }

  return root
}
