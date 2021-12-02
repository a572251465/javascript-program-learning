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
// https://leetcode-cn.com/problems/binary-tree-tilt/solution/er-cha-shu-de-po-du-by-leetcode-solution-7rha/
var findTilt = function(root) {
  if (root === null) return 0
  let dfs = 0

  function next(root) {
    if (root === null) return 0

    const left = next(root.left)
    const right= next(root.right)
    dfs += Math.abs(left - right)
    return left + right + root.val
  }
  next(root)
  return dfs
};
