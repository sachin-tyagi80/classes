function greet(name) {
  console.log(`hello ${name}`);
}

function processgreet(name, callback) {
  callback(name);
}

processgreet("sachin", greet);

function greet(name) {
  console.log(`Hello ${name}!`);
}

setTimeout(greet, 2000, "Sachin");

setTimeout(() => {
  console.log("Hello after 3 seconds!");
}, 3000);
