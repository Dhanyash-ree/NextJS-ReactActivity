
// ### 10) Add New Property

// Given:

// ```js
// const students = [
//   { name: "Alice", marks: 80 },
//   { name: "Bob", marks: 45 }
// ];
// ```

// Return a new array where each student object includes a new property:

// ```
// passed: true (if marks >= 50)
// ```

// Expected Output:

// ```
// [
//   { name: "Alice", marks: 80, passed: true },
//   { name: "Bob", marks: 45, passed: false }
// ]
// ```

const students = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 45 }
];

const updatedStudents = students.map(student => ({
  ...student,
  passed: student.marks >= 50? true : false
}));

console.log(updatedStudents);