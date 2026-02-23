const users = [
  { firstName: "Ali", lastName: "Khan" },
  { firstName: "Sara", lastName: "Ahmed" }
];

// Requirements:

// 1. Use `map()`.
// 2. Use an arrow function.
// 3. Use the spread operator.
// 4. Add a new property `fullName` that combines `firstName` and `lastName`.
// 5. Do not modify the original objects.

const updateUsers =users.map(user=>{
    return {...user, fullName: `${user.firstName} ${user.lastName}`};
})
console.log("updated",updateUsers);
console.log('original',users);