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
var minDiffInBST = function (root) {
  if (root === null) return 0
  let diff = Number.MAX_SAFE_INTEGER,
    pre = -1

  function depth(root) {
    if (root === null) return

    depth(root.left)

    if (pre === -1) {
      pre = root.val
    } else {
      diff = Math.min(diff, root.val - pre)
      pre = root.val
    }

    depth(root.right)
  }

  depth(root)

  return diff
}
