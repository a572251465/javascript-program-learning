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
var sumRootToLeaf = function (root) {
  if (root === null) return 0

  const res = []

  function dfs(root, value) {
    if (root === null) return
    const cur = `${value}${root.val}`
    if (root.left === null && root.right === null) {
      res.push(cur)
      return
    }

    dfs(root.left, cur)
    dfs(root.right, cur)
  }

  dfs(root, '')
  console.log(res)
  return res.reduce((pre, cur) => {
    pre += parseInt(cur, 2)
    return pre
  }, 0)
}
