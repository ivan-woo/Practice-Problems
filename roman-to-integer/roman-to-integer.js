/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //i: s - string representing roman numeral
    //o: integer
    
    let sum = 0;
    for (var i = 0; i < s.length; i++) {
        let current = s[i];
        let next = s[i + 1];
        let previous = s[i - 1];
        // coming across the six instances
        if (current === 'M' && previous === 'C' || current === 'D' && previous === 'C' || current === 'C' && previous === 'X' || current === 'L' && previous === 'X' || current === 'X' && previous === 'I' || current === 'V' && previous === 'I') {
            continue;
        } else if (current === 'C' && next === 'M') {
            sum += 900;
        } else if (current === 'C' && next === 'D') {
            sum += 400;
        } else if (current === 'X' && next === 'C') {
            sum += 90;
        } else if (current === 'X' && next === 'L') {
            sum += 40;
        } else if (current === 'I' && next === 'X') {
            sum += 9;
        } else if (current === 'I' && next === 'V') {
            sum += 4;
        } else if (current === 'M') {
            sum += 1000;
        } else if (current === 'D') {
            sum += 500;
        } else if (current === 'C') {
            sum += 100;
        } else if (current === 'L') {
            sum += 50;
        } else if (current === 'X') {
            sum += 10;
        } else if (current === 'V') {
            sum += 5;
        } else if (current === 'I') {
            sum += 1;
        }
    }
    return sum;
};