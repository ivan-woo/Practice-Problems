/*
Given a non-negative integer num, return whether it is a palindrome.

Example 1
Input
num = 20200202

Output
true

Example 2
Input
num = 43

Output
false
*/

class Solution {
  solve(num) {
    //i: num - positive integer
    //o: boolean

    // create empty string
    // stringify given num
    // loop through stringified num starting at the end
      // concat each char to empty string
    // if concatted string is the same as stringified num
      // return true
    // else
      // return false
    let result = '';
    let stringNum = num.toString();
    for (var i = stringNum.length - 1; i >= 0; i--) {
        result += stringNum[i];
    }
    if (result === stringNum) {
        return true;
    } else {
        return false;
    }
  }
}