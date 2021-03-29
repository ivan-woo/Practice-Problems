/*

Given a binary tree root, return whether all values in the tree are the same.

Constraints

n ≤ 100,000 where n is the number of nodes in root

*/

class Solution {
  solve(root) {
    let values = [];
    const checkValues = (node) => {
      if (node) {
        if (values.indexOf(node.val) === -1) {
          values.push(node.val);
        }
      }
      if (node.left !== null) {
        checkValues(node.left);

      }
      if (node.right !== null) {
        checkValues(node.right);
      }
    }
    checkValues(root);
    if (values.length === 1) {
      return true;
    } else {
      return false;
    }
  }
}