/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let copy = [];
    for (var i = 0; i < nums.length; i++) {
        if (copy.includes(nums[i])) {
            return nums[i];
        } else {
            copy.push(nums[i]);
        }
    }
};