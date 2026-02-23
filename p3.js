
// Problem 3: Increase Inventory Quantity

// Problem Statement:

// You are updating stock levels in an inventory system.


const inventory = [
  { item: "Pen", quantity: 10 },
  { item: "Notebook", quantity: 5 },
  { item: "Pencil", quantity: 8 }
];


// Requirements:

// 1. Use `map()`.
// 2. Use an arrow function.
// 3. Use the spread operator.
// 4. Increase the `quantity` of every item by 2.
// 5. Return a new array without mutating the original one.

const updatedInventory = inventory.map(product => {
    return { ...product, quantity: product.quantity + 2 };
}   );

console.log("updated",updatedInventory);
console.log('original',inventory);
