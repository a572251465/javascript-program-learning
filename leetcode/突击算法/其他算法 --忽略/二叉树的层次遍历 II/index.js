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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null) return []
  if (!root.left && !root.right) return [[root.val]]

  const res = [[root, 0]]
  const result = []

  while (res.length) {
    const [node, index] = res.shift()

    if (node.left) res.push([node.left, index + 1])
    if (node.right) res.push([node.right, index + 1])

    const item = result[index] || []
    item.push(node.val)
    if (!Array.isArray(result[index])) result[index] = item
  }

  return result.reverse()
}
