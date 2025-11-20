// function greet(name) {
//   console.log(`hello ${name}`);
// }

// function processgreet(name, callback) {
//   callback(name);
// }

// processgreet("sachin", greet);

// function greet(name) {
//   console.log(`Hello ${name}!`);
// }

// setTimeout(greet, 2000, "Sachin");

// setTimeout(() => {
//   console.log("Hello after 3 seconds!");
// }, 3000);

// setTimeout(() => {
//   console.log("step 1");
//   setTimeout(() => {
//     console.log("step 2");
//   });
// });

///object
// const student = {
//   name: "sachin",
//   age: 20,
//   city: "Agra",
// };
// console.log(student);

// let student1 = {
//   name: "Sachin",
//   age: 22,
//   city: "Delhi",
// };

// // Object destructuring
// let { name, age, city } = student1;
// console.log(name);
// console.log(age);
// console.log(city);

// // for...in loop to iterate through object
// for (let key in student1) {
//   console.log(`${key} ===> ${student1[key]}`);
// }

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1]; // copy array
console.log(arr2);

// array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(first);
console.log(second);
console.log(rest);

function showNames(...names) {
  console.log(`${names}`);
}

showNames("sachin", "rahul", "mohit");
