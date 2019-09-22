// destructuring is a way of defining variables and taking them out of an object of an array

// object
var obj = { first: "Dan", last: "Coolio" };
// automatically uses property key
let { first, last } = obj;

// array
var arr = [true, false, 500];
// automatically uses array index value
let [firstThing, secondThing, thirdThing] = arr;

console.log(first);
console.log(last);
console.log(firstThing);
console.log(secondThing);
console.log(thirdThing);


// example!
const exampleObj = { name: "Rusty", room: "kitchen", weapon: "candlestick" };
const { weapon, room } = exampleObj;
console.log(weapon, room)