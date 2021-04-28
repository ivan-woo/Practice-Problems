/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //i: nums - array of integers
    //o: integer
    //c: array won't be empty
    
    // brute force 
    let maxSum = nums[0];
    for (var i = 0; i < nums.length; i++) {
        let currentSum = nums[i];
        maxSum = Math.max(currentSum, maxSum);
        for (var x = i + 1; x < nums.length; x++) {
            currentSum += nums[x];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
    
};