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
 * @return {number[]}
 */
var findMode = function (root) {
  if (root === null) return []

  const obj = {}
  function depth(root) {
    if (root === null) return

    const { val } = root
    const target = obj[val] || 0
    obj[val] = target + 1

    depth(root.left)
    depth(root.right)
  }
  depth(root)

  const max = Math.max(...Object.values(obj))
  const res = []
  for (const key in obj) {
    if (obj[key] === max) res.push(key)
  }

  return res
}
