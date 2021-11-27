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
var getMinimumDifference = function(root) {
  if (!root) return 0
  let ans = Number.MAX_SAFE_INTEGER, pre = -1

  function next(root) {
    if (!root) return false

    next(root.left)
    if (pre === -1) {
      pre = root.val
    } else {
      ans = Math.min(ans, root.val - pre)
      pre = root.val
    }
    next(root.right)
  }
  next(root)
  return ans
};
