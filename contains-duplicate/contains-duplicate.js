/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let results = [];
    for (var i = 0; i < nums.length; i++) {
        if (results.indexOf(nums[i]) === -1) {
            results.push(nums[i]);
        } else {
            return true;
        }
    }
    return false;
};