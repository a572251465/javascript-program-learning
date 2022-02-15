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
var levelOrder = function (root) {
  if (root === null) return []
  const res = []

  const q = [root]
  while (q.length) {
    const size = q.length
    res.push([])

    for (let i = 0; i < size; i += 1) {
      const node = q.shift()
      res[res.length - 1].push(node.val)

      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }

  return res
}
