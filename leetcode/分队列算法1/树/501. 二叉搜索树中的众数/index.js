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
  if (!root) return null

  const obj = {}
  function find(root, obj) {
    if (root === null) return null

    const value = obj[root.val] || 0
    obj[root.val] = value + 1

    find(root.left, obj)
    find(root.right, obj)
  }
  find(root, obj)
  const max = Math.max(...Object.values(obj))
  return Object.keys(obj).filter((item) => obj[item] === max)
}
