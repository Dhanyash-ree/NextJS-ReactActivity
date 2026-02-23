
// ### 7) Boolean Conversion

// Given:

// ```js
// const scores = [45, 82, 67, 90];
// ```

// Return a new array indicating whether each score is a pass (>= 50).

// Expected Output:

// ```
// [false, true, true, true]
// ```


const scores = [45, 82, 67, 90]; 

const passStatus = scores.map(score => score >= 50 ? "Pass" : "Fail");

console.log(passStatus); 