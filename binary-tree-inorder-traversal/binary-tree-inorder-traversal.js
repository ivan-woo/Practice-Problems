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
var inorderTraversal = function(root) {
    //i: root - binary tree
    //o: array of node values
    
    let values = [];
    const traverseTree = (node) => {
        // base case
        if (!node) {
            return;
        }
        traverseTree(node.left);
        values.push(node.val);
        traverseTree(node.right);
    }
    traverseTree(root)
    return values;
    
};