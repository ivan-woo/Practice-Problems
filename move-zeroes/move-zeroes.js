/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //i: nums - array of integers
    //o: none
    //c: modify input nums, no new array
    
    // create a index variable
    // loop through input
      // if current element is not 0
        // move to front of the array
        // increment index
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }
    // fill in rest of the array with 0's
    // since we only increment index on non-zeros, this should logically fill in the rest
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
};