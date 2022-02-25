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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (root === null) return 0

  let sum = 0

  function dfs(root) {
    if (root === null) return

    dfs(root.left)

    const { val } = root
    if (val >= low && val <= high) {
      sum += val
    }
    if (val > high) return

    dfs(root.right)
  }

  dfs(root)

  return sum
}
