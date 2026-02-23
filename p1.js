const products = [
  { id: 1, name: "Phone", price: 800 },
  { id: 2, name: "Mouse", price: 40 },
  { id: 3, name: "Laptop", price: 1200 }
];



// 1. Use `map()`.
// 2. Use an arrow function.
// 3. Use the spread operator.
// 4. If `price > 500`, add a new property `discountedPrice` with a 20% discount applied.
// 5. If `price <= 500`, return the product unchanged.
// 6. Do not mutate the original array or objects.

const updatedProducts = products.map(product => {
    if (product.price > 500) {
        return { ...product, discountedPrice: product.price * 0.8 };
    }   else {      
        return product;
    }
});

console.log("updated",updatedProducts);
console.log('original',products);
