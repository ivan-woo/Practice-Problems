/*
First Unique Character in a String

Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

*/


var firstUniqChar = function(s) {
  // i: string
  // o: number
  // c: none
  // e: empty string

  // create default index to -1
  // create an empty object
  // loop through string
    // if object does not contain current character' as a key
      // create a new property with current character's index as a key with an array with the index
    // else
      // push the current character's index into the existing array
  // loop through object
    // return first property's array value with a length of 1

  let index = -1;
  let characterCount = {};
  for (var i = 0; i < s.length; i++) {
      let currentChar = s[i];
      if (characterCount[currentChar] === undefined) {
          characterCount[currentChar] = [i];
      } else {
          characterCount[currentChar].push(i);
      }
  }
  for (var key in characterCount) {
      if (characterCount[key].length === 1) {
          return characterCount[key][0];
      }
  }
  return index;
};