
// ### 8) Format Full Names

// Given:

// ```js
// const users = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" }
// ];
// ```

// Return:

// ```
// ["John Doe", "Jane Smith"]
// ```


const users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];

const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);

console.log(fullNames);