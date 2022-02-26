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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  if (root === null) return null

  let curRoot = null,
    cur = null

  function dsf(root) {
    if (root === null) return

    dsf(root.left)

    if (curRoot === null) {
      curRoot = new TreeNode(root.val)
      cur = curRoot
    } else {
      cur.right = new TreeNode(root.val)
      cur = cur.right
    }

    dsf(root.right)
  }

  dsf(root)

  return curRoot
}
