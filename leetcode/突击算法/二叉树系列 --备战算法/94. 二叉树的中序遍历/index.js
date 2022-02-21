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
var inorderTraversal = function (root) {
  const res = []
  if (root === null) return res

  // 递归进行中序遍历
  function it(root) {
    if (root === null) return

    // 中序遍历的原则是：前 中 后 (所有的遍历都是针对于中间节点(父节点)来说的)
    it(root.left)
    res.push(root.val)
    it(root.right)
  }

  it(root)
  return res
}
