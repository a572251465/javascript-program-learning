/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return []

  const res = []

  function dfs(arr = []) {
    if (arr.length <= 0) return

    let cur
    const newArr = []
    const item = []

    while ((cur = arr.shift())) {
      item.push(cur.val)
      if (cur.left) newArr.push(cur.left)
      if (cur.right) newArr.push(cur.right)
    }

    res.push(item)
    dfs(newArr)
  }

  dfs([root])

  return res
}
