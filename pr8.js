
// ### 3) Extract Property

// Given:

// ```js
// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 }
// ];
// ```

// Return an array of product names only.

// Expected Output:

// ```
// ["Laptop", "Phone"]
// ```

// ---

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];  
const productNames = products.map(product => product.name);
console.log(productNames); // Output: ["Laptop", "Phone"]