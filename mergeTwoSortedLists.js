//Given two lists of integers a and b sorted in ascending order, merge them into one large sorted list.

class Solution {
  solve(a, b) {
    //i: a - array of integers, b - array of integers
    //o: sorted array
    let result = a.concat(b);
    return result.sort((a,b) => {return a-b})
  }
}