/*

Given a binary search tree root and an integer val, determine whether val is in the tree.

Constraints
n ≤ 100,000 where n is the number of nodes in root

Example 1

Input
root = [3, [2, null, null], [9, [7, [4, null, null], [8, null, null]], [12, null, null]]]
val = 4

Output
true

*/

class Solution {
  solve(root, val) {
    let result = false;
    const searchTree = (node) => {
        if (!node) {
            return result = false;
        }
        if (node.val === val) {
            return result = true;
        }
        if (node.left) {
            searchTree(node.left);
        }
        if (node.right) {
            searchTree(node.right);
        }
    }
    searchTree(root);
    return result;
  }
}
