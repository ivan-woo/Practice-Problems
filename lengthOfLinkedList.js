/*

Given a singly linked list node, return its length. The linked list has fields next and val.

Constraints
n ≤ 100,000 where n is the number of nodes in node

Example 1

Input
node = [5, 4, 3]

Output
3

*/

class Solution {
  solve(node) {
    let length = 0;
    const findLength = (currentNode) => {
        if (!currentNode) {
            return;
        } else {
            length += 1;
        }
        findLength(currentNode.next);
    }
    findLength(node);
    return length
  }
}