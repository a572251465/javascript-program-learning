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
var isBalanced = function (root) {
  if (root === null) return true

  let isBalanceTree = true
  function nextTree(root) {
    if (root === null) return 0

    const left = nextTree(root.left)
    const right = nextTree(root.right)

    if (isBalanceTree === true) isBalanceTree = Math.abs(left - right) <= 1
    return Math.max(left, right) + 1
  }

  nextTree(root)
  return isBalanceTree
}
