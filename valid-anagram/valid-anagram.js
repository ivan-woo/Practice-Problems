/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //i: s - string, t - string
    //o: boolean
    
    // put each char in s string into an array
    // iterate through t string
      // if the array index of t string's char doesn't exist
        // return false
      // else
        // remove that letter in the array at that index
    // if the array is empty
      // return true
    let letters = s.split('');
    for (var i = 0; i < t.length; i++) {
        let char = t[i];
        if (letters.indexOf(char) === -1) {
            return false;
        } else {
            letters.splice(letters.indexOf(char), 1);
        }
    }
    if (letters.length === 0) {
        return true;
    } 
    return false;
};