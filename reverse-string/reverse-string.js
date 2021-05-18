/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
                          v
 Input: s = ["h","e","l","l","o"]
                   ^
 */

var reverseString = function(s) {
    //i: s - array of characters
    //o: none
    //ec: what if input is empty? 
    //c: must modify input array, constant space complexity
    
    // iterate through given array
      // create a reference to current element
      // swap current with last element
      // swap current with reference element
    let reverseIndex = s.length - 1;
    for (var i = 0; i < Math.floor(s.length/2); i++) {
        let current = s[i];
        s[i] = s[reverseIndex];
        s[reverseIndex] = current;
        reverseIndex--;
    }
};