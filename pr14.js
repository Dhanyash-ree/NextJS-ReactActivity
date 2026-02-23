// ### 9) Nested Array Transformation

// Given:

// ```js
// const numbers = [
//   [1, 2],
//   [3, 4]
// ];
// ```

// Return a new array where each number is multiplied by 3.

// Expected Output:

// ```
// [[3, 6], [9, 12]]
// ```

// ---


const numbers = [
  [1, 2],
  [3, 4]
];

const multipliedNumbers = numbers.map(subArray => subArray.map(num => num * 3));
console.log(multipliedNumbers);