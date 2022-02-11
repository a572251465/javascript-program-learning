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
var isCompleteTree = function (root) {
  if (root.left === null && root.right === null) return true

  let values = []
  const nodeArr = [root]

  while (nodeArr.length > 0) {
    const item = nodeArr.shift()
    if (item === null) {
      values.push(null)
    } else {
      if (item.left === null && item.right) return false
      values.push(item.val)
      nodeArr.push(item.left || null)
      nodeArr.push(item.right || null)
    }
  }

  let i = values.length - 1
  while (values[i--] === null);
  values = values.slice(0, i + 1)
  return values.every((item) => !!item)
}
