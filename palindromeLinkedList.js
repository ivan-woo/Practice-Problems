/*
Given a singly linked list node whose values are integers, determine whether the linked list forms a palindrome.

A palindrome is a string that reads the same backward as forward.

For example, "racecar" is a palindrome.

*/

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
  solve(node) {
    let values = [];
    const grabValues = (currentNode) => {
      if (currentNode) {
          values.push(currentNode.val);
          grabValues(currentNode.next);
      }
    }
    grabValues(node);
    let copy = values.slice();
    let copyReversed = copy.reverse();
    for (var i = 0; i < values.length; i++) {
      if (values[i] !== copyReversed[i]) {
        return false;
      }
    }
    return true;
  }
}