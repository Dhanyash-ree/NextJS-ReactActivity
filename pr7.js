
// ### 2) Convert to Uppercase

// Given:

// ```js
// const words = ["apple", "banana", "cherry"];
// ```

// Return all words in uppercase.

// Expected Output:

// ```
// ["APPLE", "BANANA", "CHERRY"]
// ```

// ---


const words = ["apple", "banana", "cherry"];

const uppercaseWords = words.map(word => word.toUpperCase());   
console.log(uppercaseWords); 