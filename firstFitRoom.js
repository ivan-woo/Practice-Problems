/*

You are given a list of integers rooms and an integer target. Return the first integer in rooms that's target or larger. If there is no solution, return -1.

Constraints

0 ≤ n ≤ 100,000 where n is the length of rooms

Example 1

Input
rooms = [15, 10, 30, 50, 25]
target = 20

Output
30

Explanation
30 is the first room that's at least as large as 20.

*/

class Solution {
  solve(rooms, target) {
    //i: rooms - array of nums, target - integer
    //o: integer

    let result = -1;
    for (var i = 0; i < rooms.length; i++) {
        if (rooms[i] >= target) {
            return result = rooms[i];
        }
    }
    return result;
  }
}