// Write a function to return the second largest number from an array of numbers.

// Example Input: [10, 5, 20, 8, 12]
// Example Output: 12


// the array whome you want to filter this.
const array = [10, 5, 20, 8, 12];

// sorting that and returning this in result variable.
let result = array.sort((a, b) => {

    // returning with checking condition, array sorted decending.
    return(a - b);

})


console.log(result);

// storing sorted array langth, the lenght is +1 form array index defaultly.
let secondEnd = result.length

// minus 1 for minus from length. another minus for the second largest number that sorted.
console.log(result[secondEnd - 2]);


































