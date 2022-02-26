/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length <= 0) return null

  function dfs(start, end) {
    if (start > end) return null

    const mid = (start + (end - start) / 2) | 0
    const midValue = nums[mid]

    const root = new TreeNode(midValue)

    root.left = dfs(start, mid - 1)
    root.right = dfs(mid + 1, end)

    return root
  }

  return dfs(0, nums.length - 1)
}
