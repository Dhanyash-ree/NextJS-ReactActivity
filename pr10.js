// Add Index to Each Item

// Given:

// ```js
// const items = ["Pen", "Pencil", "Eraser"];
// ```

// Return:

// ```
// ["1. Pen", "2. Pencil", "3. Eraser"]
// ```

 const items = ["Pen", "Pencil", "Eraser"];

 const indexedItems = items.map((item, index) => `${index + 1}. ${item}`);

 console.log(indexedItems); // Output: ["1. Pen", "2. Pencil", "3. Eraser"]