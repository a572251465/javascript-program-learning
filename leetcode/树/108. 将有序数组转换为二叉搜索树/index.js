/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function (nums) {
  const helper = function helper(left, right) {
    if (left > right) return null

    const mid = Math.ceil((left + right) / 2)
    const root = new TreeNode(nums[mid])
    root.left = helper(left, mid - 1)
    root.right = helper(mid + 1, right)
    return root
  }

  return helper(0, nums.length - 1)
}

console.dir(sortedArrayToBST([-10, -3, 0, 5, 9]), { depth: Infinity })
