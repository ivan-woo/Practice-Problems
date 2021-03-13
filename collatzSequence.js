/*
Given a positive integer n, find the length of its Collatz sequence. The Collatz sequence is generated sequentially where

n = n / 2 if n is even
n = 3 * n + 1 if n is odd
And the sequence ends if n = 1

*/

class Solution {
  solve(n) {
      // i: n - integer
      // o: integer - array length
      // c: none
      // ec: ?

      let sequence = [];
      while (n !== 1) {
          if (n % 2 === 0) {
              sequence.push(n /= 2);
          } else {
              sequence.push(n = (3 * n) + 1)
          }
      }
      return sequence.length + 1;
  }
}