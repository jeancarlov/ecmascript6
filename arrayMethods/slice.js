// slice () Slices out a piece of an array into a new array
// does not alter the original array. It returns a shallow copy of elements from the original array.

let arr1 = [1,2,3,'a','b', 'c'];

let result = arr1.slice()
let result1 = arr1.slice( )


console.log(result);
console.log(result1);



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
