/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  if (root === null) return 0

  let cur

  function dfs(root) {
    if (root === null) return

    // 二叉搜索树 中序自带排序功能 左中右 => 升序 右中左 => 降序
    dfs(root.right)
    if (k-- === 1) {
      cur = root.val
      return
    }
    dfs(root.left)
  }

  dfs(root)

  return cur
}
