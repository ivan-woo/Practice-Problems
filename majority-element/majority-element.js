/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityCount = nums.length / 2;
    let elementCount = {};
    for (var i = 0; i < nums.length; i++) {
        if (elementCount[nums[i]] === undefined) {
            elementCount[nums[i]] = 1;
        } else {
            elementCount[nums[i]]++;
        }
    }
    for (var element in elementCount) {
        if (elementCount[element] > majorityCount) {
            return element;
        }
    }
};