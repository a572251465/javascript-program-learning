/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  /**
   *
   * @param {*} inorder 中序数组
   * @param {*} inStart 中序开始位置
   * @param {*} inEnd 中序结束位置
   * @param {*} postorder 后续数组
   * @param {*} posStart 后续开始位置
   * @param {*} posEnd 后续结束位置
   * @returns
   */
  function build(inorder, inStart, inEnd, postorder, posStart, posEnd) {
    if (inStart > inEnd) return null

    // 寻找头节点
    const last = postorder[posEnd]
    // 从中序数组中寻找头节点位置
    const middle = inorder.findIndex((item) => item === last)
    // 构建新的节点
    const root = new TreeNode(last, null, null)
    // 左侧节点个数
    const leftSize = middle - inStart

    /**
     * 参数分析：
     * inorder 中序元数组
     * inStart 中序开始位置
     * middle - 1 中序位置 - 1 都是left节点
     * postorder 后序元数组
     * posStart 后续开始位置
     * posStart + leftSize - 1  除了左以及头节点 就是右节点
     */
    root.left = build(inorder, inStart, middle - 1, postorder, posStart, posStart + leftSize - 1)
    root.right = build(inorder, middle + 1, inEnd, postorder, posStart + leftSize, posEnd - 1)

    return root
  }

  return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1)
}
