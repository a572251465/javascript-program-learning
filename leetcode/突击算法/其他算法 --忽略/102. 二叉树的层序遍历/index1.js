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

  function next(arr, index) {
    if (arr.length <= 0) return

    const newArr = []
    const item = res[index] || []
    if (!Array.isArray(res[index])) res[index] = item
    let i = 0

    for (; i < arr.length; i += 1) {
      const node = arr[i]
      if (node.left) newArr.push(node.left)
      if (node.right) newArr.push(node.right)

      item.push(node.val)
    }

    next(newArr, index + 1)
  }

  next([root], 0)
  return res
}
