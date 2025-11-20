const names = ["rajat", "veer", "raju", "ria"];
// const names2=names.filter((name)=> name.length>4);
// console.log(names2);

// const students=[{name:"deepak", age:20},
// {name:"sonu", age:18},
// {name:"monu", age:22}
// ];
// const adultStudents= students.filter((student)=> student.age>=20);
// console.log(adultStudents);

// console.log(typeof NaN);
// Number;

// const number=[1,2,3,4,5];
// const number2=number.map((num)=> num * 2);
// console.log(number2);

// const number4=number.map(num=> num*num).filter(num=>num%2==0);
// console.log(number4);

const students = [
  { name: "raghu", marks: 90 },
  { name: "vijay", marks: 85 },
  { name: "ajay", marks: 78 },
];
const topStudents = students
  .filter((student) => student.marks >= 80)
  .map((student) => student.name);
console.log(topStudents);

//higher order functions
//foreach,reduce,map,filter

window.sessionStorage;
window.document;

var x = 10;
let y = 20;

