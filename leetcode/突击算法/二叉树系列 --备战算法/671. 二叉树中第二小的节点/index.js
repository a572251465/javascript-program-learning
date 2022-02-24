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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  let ans = -1
  const rootVal = root.val

  const dfs = (node) => {
    if (node === null) return

    // 如果ans 不等于-1的话 表示赋值过了 && 如果再遇到大于的值 直接通过剪枝跳过
    if (ans !== -1 && node.val >= ans) return

    if (node.val > rootVal) {
      ans = node.val
      return
    }

    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return ans
}
