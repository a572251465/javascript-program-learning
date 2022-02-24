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

  let existFlag = false
  const map = new Map()

  function depth(root) {
    if (root === null) return false

    depth(root.left)

    const { val } = root
    if (map.has(val)) {
      existFlag = true
      return
    } else {
      const diff = k - val
      map.set(diff, val)
    }

    depth(root.right)
  }

  depth(root)

  return existFlag
}
// 2 3 4 5 6 7
