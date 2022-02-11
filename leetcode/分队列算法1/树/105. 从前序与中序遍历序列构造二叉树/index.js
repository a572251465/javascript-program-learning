/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null

  const pre = preorder.shift(),
    root = new TreeNode(pre, null, null),
    middleIndex = inorder.findIndex((item) => item === pre)
  const leftArr = inorder.slice(0, middleIndex)
  const rightArr = inorder.slice(middleIndex + 1)

  root.left = buildTree(preorder, leftArr)
  root.right = buildTree(preorder, rightArr)

  return root
}
