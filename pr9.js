
// ### 4) Add 10% Discount

// Given:

// ```js
// const prices = [100, 200, 300];
// ```

// Return a new array with 10% discount applied to each price.

// Expected Output:

// ```
// [90, 180, 270]
// ```

// ---

 const prices = [100, 200, 300];

 const discountedPrices = prices.map(price => price * 0.9);

 console.log(discountedPrices); // Output: [90, 180, 270]