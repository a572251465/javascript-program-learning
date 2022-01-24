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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const existArr = []
  const map = {}

  function depth(root) {
    if (root === null) return '#'
    const str = `${root.val},${depth(root.left)},${depth(root.right)}`

    map[str] = (map[str] || 0) + 1
    if (map[str] === 2) {
      existArr.push(root)
    }

    return str
  }
  depth(root)

  return existArr
}
