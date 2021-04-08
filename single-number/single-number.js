/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //i: nums - array of integers
    //o: integer
    //ec: only 1 integer
    
    if (nums.length === 1) {
        return nums[0];
    }
    let tracker = {};
    for (var i = 0; i < nums.length; i++) {
        if (tracker[nums[i]]) {
            tracker[nums[i]]++;
        } else {
            tracker[nums[i]] = 1;
        }
    }
    for (var integer in tracker) {
        if (tracker[integer] === 1) {
            return integer;
        }
    }
};