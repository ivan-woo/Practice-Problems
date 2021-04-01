/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let counts = [];
    for (var i = 0; i < nums.length; i++) {
        let counter = 0;
        for (var x = 0; x < nums.length; x++) {
            if (nums[x] < nums[i]) {
                counter++;
            }
        }
        counts.push(counter);
    }
    return counts;
};