
// Problem 5: Mark High Priority Orders

// Problem Statement:

// You are building an order processing feature.




// Requirements:

// 1. Use `map()`.
// 2. Use an arrow function.
// 3. Use the spread operator.
// 4. Add a property `priority`:

//    * `true` if `total >= 200`
//    * `false` otherwise
// 5. Return a new array without mutating the original data.


const orders = [
  { id: 1, total: 250 },
  { id: 2, total: 80 },
  { id: 3, total: 150 }
];

const updateOrders=orders.map(order=>{
    return {...order,priority:order.total>=200?true:false}
})
console.log("updated",updateOrders);
console.log("original",orders); 