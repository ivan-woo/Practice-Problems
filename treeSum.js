/*

Given a binary tree root, return the sum of all values in the tree.

Constraints

n ≤ 100,000 where n is the number of nodes in root

 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }

*/

class Solution {
  solve(root) {
      let sum = 0;
      const findSum = (node) => {
        if (!node) {
            return;
        } else {
            sum += node.val;
        }
        if (node.left) {
            findSum(node.left);
        }
        if (node.right) {
            findSum(node.right);
        }
      }
      findSum(root);
      return sum;
  }
}