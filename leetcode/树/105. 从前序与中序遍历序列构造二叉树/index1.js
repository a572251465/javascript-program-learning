/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder 前序
 * @param {number[]} inorder 中序
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd) return null

    const pre = preorder[preStart]
    const root = new TreeNode(pre, null, null)
    // 头节点对应的中序的位置
    const middle = inorder.findIndex((item) => item === pre)
    // 左侧节点
    const leftSize = middle - inStart

    root.left = build(preorder, preStart + 1, preStart + leftSize, inorder, inStart, middle - 1)
    root.right = build(preorder, preStart + leftSize + 1, preEnd, inorder, middle + 1, inEnd)

    return root
  }
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
}
