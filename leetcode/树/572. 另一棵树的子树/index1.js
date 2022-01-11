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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const rootArr = []
  const subArr = []
  function serial(root, arr = []) {
    if (root === null) return

    arr.push(root.val)
    if (root.left === null) arr.push('lNull')
    serial(root.left, arr)
    if (root.right === null) arr.push('rNull')
    serial(root.right, arr)
  }
  serial(root, rootArr)
  serial(subRoot, subArr)
  console.log(rootArr, subArr)
}
