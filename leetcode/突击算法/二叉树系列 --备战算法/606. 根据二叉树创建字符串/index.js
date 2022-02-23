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
 * @return {string}
 */
var tree2str = function (root) {
  if (root === null) return null

  const { val } = root
  const left = tree2str(root.left)
  const right = tree2str(root.right)

  let res = ''

  if (left === null && right) res = `()(${right})`
  if (left && right === null) res = `(${left})`
  if (left && right) res = `(${left})(${right})`

  return `${val}${res}`
}
