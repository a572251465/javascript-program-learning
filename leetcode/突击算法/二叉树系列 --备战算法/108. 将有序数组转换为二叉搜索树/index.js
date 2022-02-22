/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length <= 0) return null

  const mid = (nums.length / 2) | 0
  const midValue = nums[mid]

  const tree = new TreeNode(midValue)
  tree.left = sortedArrayToBST(nums.slice(0, mid))
  tree.right = sortedArrayToBST(nums.slice(mid + 1))

  return tree
}
