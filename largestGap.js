/*

Given a list of integers nums, return the largest difference of two consecutive integers in the sorted version of nums.

Constraints

n ≤ 100,000 where n is the length of nums

Example 1

Input
nums = [4, 1, 2, 8, 9, 10]

Output
4

Explanation
The largest gap is between 4 and 8.

*/

class Solution {
  solve(nums) {
    //i: nums - array
    //o: integer
    //ec: array with 1 integer?

    // create diff variable
    // sort input array
    // loop through array
      // find diff of current num and next num
      // if current diff is larger than diff var
        // set new diff
    // return diff
    let diff = 0;
    let sorted = nums.sort((a, b) => {return a-b})
    for (var i = 0; i < sorted.length; i++) {
        if (sorted[i + 1] - sorted[i] > diff) {
            diff = sorted[i + 1] - sorted[i];
        }
    }
    return diff;
  }
}