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
 * @return {number}
 */
var findTilt = function (root) {
  if (root === null) return 0

  let sum = 0
  function depth(root) {
    if (root === null) return 0

    const leftSum = depth(root.left)
    const rightSum = depth(root.right)

    sum += Math.abs(leftSum - rightSum)

    return leftSum + rightSum + root.val
  }
  depth(root)

  return sum
}
