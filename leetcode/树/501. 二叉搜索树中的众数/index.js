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
var findMode = function(root) {
  if (!root) return null

  const map = {}
  function next(root) {
    if (!root) return false

    const {val} = root
    if (Reflect.has(map, val)) {
      map[val] += map[val]
    } else {
      map[val] = 1
    }

    next(root.left)
    next(root.right)
  }
  next(root)

  const values = Object.values(map)
  const max = Math.max(...values)
  return Object.keys(map).filter(item => map[item] === max)
};
