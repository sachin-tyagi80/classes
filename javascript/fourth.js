// const students = ["sachin", "rahul", "Abhishek"];

// function Introduce(name) {
//   console.log(`Hello !!! ${name}`);
// }

// students.forEach(Introduce);

///square of all numbers in this array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const squares = numbers.map((num) => num * num);
// console.log(squares);

// const products = [
//   { name: "laptop", price: 1500 },
//   { name: "phone", price: 800 },
//   { name: "tablet", price: 600 },
//   { name: "monitor", price: 300 },
// ];

// products.forEach((product) => {
//   console.log(`Product: ${product.name}, Price: $${product.price}`);
// });

// const students = [
//   { name: "Ankit", age: 20, city: "Mathura" },
//   { name: "Sachin", age: 21, city: "Agra" },
//   { name: "Rahul", age: 22, city: "Delhi" },
//   { name: "Abhishek", age: 19, city: "Noida" },
//   { name: "Mohit", age: 23, city: "Jaipur" },
// ];

// students.forEach((student) => {
//   console.log(
//     `My name is ${student.name}, I am ${student.age} years old, and I am from ${student.city}.`
//   );
// });

/// result
// const numbers = [2, 3, 4, 5, 6, 7];
// const result = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(result);

// let acc2 = 0;
// function sum(acc, curr) {
//   let acc3 = acc2 + curr;
//   return acc2;
// }
// const numbers1 = [1, 2, 3, 4, 5];
// const result2 = numbers.reduce((acc, curr) => acc * curr, 1);
// console.log(result2);

/// find the maximam num in array
// let numbers = [23, 45, 6, 7, 890, 43];
// let max1 = numbers.reduce((acc, curr) => (acc > curr ? acc : curr), numbers[0]);
// console.log(max1);

//// Step 1: Create an array of product objects
// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 600 },
//   { name: "Monitor", price: 300 },
//   { name: "Keyboard", price: 100 },
// ];

// const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

// console.log("Total Price:", totalPrice);

/// Create an array of course objects
// const courses = [
//   { courseName: "JavaScript", sections: 3, students: 40 },
//   { courseName: "Python", sections: 2, students: 35 },
//   { courseName: "Java", sections: 4, students: 30 },
//   { courseName: "C++", sections: 3, students: 25 },
//   { courseName: "React", sections: 2, students: 20 },
// ];

// const totalStudents = courses.reduce((acc, course) => {
//   return acc + course.sections * course.students;
// }, 0);

// // Print the total students
// console.log(totalStudents);
