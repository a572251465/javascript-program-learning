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

  let total = []
  function next(root) {
    if (!root) return false

    next(root.left)
    total.unshift(root.val)
    next(root.right)
  }
  next(root)
  
  total = total.map((item, index) => {
    const next = total[index + 1]
    if (next === undefined) return next
    return item - next
  })

  total = total.sort((a, b) => a - b)
  return total[0]
};
