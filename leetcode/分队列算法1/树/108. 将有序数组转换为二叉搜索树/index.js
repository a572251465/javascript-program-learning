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
  if (nums.length === 0) return null
  if (nums.length === 1) return new TreeNode(nums[0])

  const centerIndex = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[centerIndex])
  const leftArr = nums.slice(0, centerIndex)
  const rightArr = centerIndex + 1 === nums.length ? [] : nums.slice(centerIndex + 1)

  root.left = sortedArrayToBST(leftArr)
  root.right = sortedArrayToBST(rightArr)
  return root
}
