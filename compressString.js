/*

Given a string lowercase alphabet s, eliminate consecutive duplicate characters from the string and return it.

That is, if a list contains repeated characters, they should be replaced with a single copy of the character. The order of the elements should not be changed.

Constraints

0 ≤ n ≤ 100,000 where n is the length of s

Example 1
Input
s = "aaaaaabbbccccaaaaddf"
Output
"abcadf"

*/

class Solution {
  solve(string) {
    let result = '';
    if (string.length === 1) {
        return string;
    }
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== string[i - 1]) {
            result += string[i];
        }
    }
    return result;
  }
}