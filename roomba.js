/*

A Roomba robot is currently sitting in a Cartesian plane at (0, 0). You are given a list of its moves that it will make, containing NORTH, SOUTH, WEST, and EAST.

Return whether after its moves it will end up in the coordinate (x, y).

Constraints

n ≤ 100,000 where n is length of moves

*/

class Solution {
  solve(moves, x, y) {
    //i: moves - array, x - integer, y - integer
    //o: boolean
    let positionX = 0;
    let positionY = 0;
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === 'NORTH') {
            positionY += 1;
        } else if (moves[i] === 'SOUTH') {
            positionY -= 1;
        }
        if (moves[i] === 'EAST') {
            positionX += 1;
        } else if (moves[i] === 'WEST') {
            positionX -= 1;
        }
    }
    if (positionX === x && positionY === y) {
        return true;
    } else {
        return false;
    }
  }
}