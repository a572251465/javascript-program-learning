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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  if (root === null) return false

  const set = new Set()

  function dfs(root) {
    if (root === null) return

    const left = dfs(root.left)

    const { val } = root
    if (set.has(val)) return true
    const diff = k - val
    set.add(diff)

    const right = dfs(root.right)

    return !!left || !!right
  }

  return dfs(root)
}
