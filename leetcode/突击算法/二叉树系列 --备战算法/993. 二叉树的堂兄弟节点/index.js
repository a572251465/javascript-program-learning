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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  if (root === null) return false

  const parentNode = new Set()

  function dfs(arr = []) {
    if (arr.length <= 0) return

    const newArr = []
    const res = []

    let cur
    while ((cur = arr.shift())) {
      res.push(cur.val)
      if (cur.left) {
        newArr.push(cur.left)
        if ([x, y].includes(cur.left.val)) parentNode.add(cur.val)
      }
      if (cur.right) {
        newArr.push(cur.right)
        if ([x, y].includes(cur.right.val)) parentNode.add(cur.val)
      }
    }

    if (res.includes(x) && res.includes(y) && parentNode.size >= 2) return true

    return dfs(newArr)
  }

  return !!dfs([root])
}
