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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (root === null) return false

  const arr = [root]
  let cur, saveValue

  while ((cur = arr.shift())) {
    if (saveValue === undefined) {
      saveValue = cur.val
    }
    if (saveValue !== cur.val) return false

    if (cur.left) arr.push(cur.left)
    if (cur.right) arr.push(cur.right)
  }

  return true
}
