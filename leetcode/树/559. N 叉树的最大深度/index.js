/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0
  if (root.children.length === 0) return 1

  const result = root.children.map(item => maxDepth(item))
  return Math.max(...result) + 1
};
