/*
Given a list of integers nums, return whether the list is strictly increasing or strictly decreasing.

Constraints
n ≤ 100,000 where n is the length of nums

Example 1
Input
nums = [1, 2, 3, 4, 5]
Output
true

Example 2
Input
nums = [1, 2, 3, 4, 5, 5]
Output
false

*/

class Solution {
  solve(nums) {
    //i: nums - array of integers
    //o: boolean
    //ec: what if just 1 integer?

    if (nums.length === 1) {
      return true;
    }
    // iterate through array twice and check for each following integer
    //check for increasing
    let isIncreasing = false;
    let isDecreasing = false;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i + 1] === undefined) {
        break;
      }
      if (nums[i] < nums[i + 1]) {
        isIncreasing = true;
      } else {
        isIncreasing = false;
        break;
      }
    }
    if (isIncreasing) {
      return true;
    }
    //check for decreasing
    for (var x = 0; x < nums.length; x++) {
      if (nums[x + 1] === undefined) {
        break;
      }
      if (nums[x] > nums[x + 1]) {
        isDecreasing = true;
      } else {
        isDecreasing = false;
        break;
      }
    }
    if (isDecreasing) {
      return true;
    }
    return false;
  }
}