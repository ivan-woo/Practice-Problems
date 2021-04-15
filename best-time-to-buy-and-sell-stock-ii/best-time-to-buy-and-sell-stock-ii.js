/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //i: prices - array of integers
    //o: integer
    
    // can't mutate input array
    // profit only exists if a smaller number is before a larger number
    
    // create a profit variable
    // iterate through prices
      // if the next price is greater than current
        // add that difference to profit
    // return profit
    let profit = 0;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i];
        }
    }
    return profit;
};