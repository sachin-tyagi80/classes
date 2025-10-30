console.log("my name is sachin");
let fruits = ["apple,mango,orange"];
console.log(typeof fruits);
console.log(fruits);

for (let i = 0; i < 3; i++) {
  console.log(fruits[i]);
}

let a = 4;
let b = a;
a = 8;
console.log(a);
console.log(b);

let arr1 = [12, 34, 35];
arr1.push(87);
console.log(arr1);
arr1.unshift(321);
console.log(arr1);
arr1.pop();
arr1.shift();

let students = ["sachin", "rahul", "shivam"];
students.splice(1, 2);
console.log(students);

let team = ["sachin", "amsn", "vivek"];
team.splice(3, 0, "neha", "rahul");
console.log(team);
