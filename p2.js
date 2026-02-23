// Problem 2: Add Pass/Fail Status to Students

// Problem Statement:

// You are implementing a grading system.


const students = [
  { name: "Ali", marks: 75 },
  { name: "Sara", marks: 45 },
  { name: "John", marks: 90 }
];


// Requirements:

// 1. Use `map()`.
// 2. Use an arrow function.
// 3. Add a new property `status`.

//    * `"Pass"` if `marks >= 50`
//    * `"Fail"` otherwise
// 4. Return a new array.
// 5. Do not modify the original student objects.

const updatedStudents = students.map(student => {
    return {...student, status: student.marks >= 50 ? "Pass" : "Fail" };
});

console.log("updated",updatedStudents);
console.log('original',students);
