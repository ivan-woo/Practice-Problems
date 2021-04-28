/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // input - array, integer
    // output - array of indexes
    
    //brute force method - search all possible pair of numbers
    
    // create a results array
    // iterate through array
      // iterate through array again at following index
        // if the current and following adds up to target
          // push the indices into results
          // break out of loop
    //return results
    let indices = [];
    for (var i = 0; i < nums.length; i++) {
        let firstNum = nums[i];
        for (var x = i + 1; x < nums.length; x++) {
            let secondNum = nums[x];
            if (firstNum + secondNum === target) {
                indices.push(i, x);
                break;
            }
        }
    }
    return indices;
    
};