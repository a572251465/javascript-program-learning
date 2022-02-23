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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const res = []

  function depth(arr) {
    if (arr.length <= 0) return
    let curLevel = 0
    const curCount = arr.length
    const nextArr = []
    let cur

    while ((cur = arr.shift())) {
      curLevel += cur.val
      if (cur.left) nextArr.push(cur.left)
      if (cur.right) nextArr.push(cur.right)
    }

    res.push((curLevel / curCount).toFixed(5))
    depth(nextArr)
  }

  depth([root])

  return res
}
