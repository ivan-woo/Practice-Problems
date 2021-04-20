/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    //i: nums - array of integers
    //o: node - bst
    //ec: array with 1 integer, empty array
    
    // base cases
    if (nums.length === 0) {
        return null;
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0]);
    }
    
    // have root node start in the middle to be balanced
    let middle = Math.floor(nums.length / 2)
    let root = new TreeNode(nums[middle]);
    // split array down the middle and build left side of tree using left side of array
    let numsLeft = nums.slice(0, middle);
    root.left = sortedArrayToBST(numsLeft);
    // build right side of tree using right side of array
    let numsRight = nums.slice(middle + 1, nums.length);
    root.right = sortedArrayToBST(numsRight);
    return root;
    
    
};