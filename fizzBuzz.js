/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
  // input: n - number
  // output: array of strings
  // constraints: none
  // edge cases: negative numbers? decimals?

  // create a results array
  // loop from 1 to n
    // if current number is divisible by 3 and 5 with no remainder
      // add "FizzBuzz" to array
    // else if current number is divisble only by 3
      // add "Fizz" to array
    // else if current number is divisible only by 5
      // add "Buzz" to array
    // else
      // stringify the current number and add to array
  // return results array

  let results = [];
  for (var i = 1; i <= n; i++) {
      let currentNum = i;
      if (currentNum % 3 === 0 && currentNum % 5 === 0) {
          results.push("FizzBuzz");
      } else if (currentNum % 3 === 0) {
          results.push("Fizz");
      } else if (currentNum % 5 === 0) {
          results.push("Buzz");
      } else {
          results.push(currentNum.toString())
      }
  }
  return results;
};