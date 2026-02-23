// ### 1) Square Numbers

// Given:


// const numbers = [2, 4, 6, 8];


// Return a new array containing the square of each number.

// Expected Output:

// ```
// [4, 16, 36, 64]
// ```

// ---

const numbers = [2, 4, 6, 8];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // Output: [4, 16, 36, 64]