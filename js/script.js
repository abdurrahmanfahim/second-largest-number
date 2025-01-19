// Write a function to return the second largest number from an array of numbers.

// Example Input: [10, 5, 20, 8, 12]
// Example Output: 12


const array = [10, 5, 20, 8, 12];

let result = array.sort((a, b) => {

    return(a - b);

})

console.log(result);

let secondEnd = result.length

console.log(result[secondEnd - 2]);


































