// concat() Creates a new array by concatenating two arrays
//  This method does not change the existing arrays, but instead returns a new array.
let test1 = [1,2,3,4];
let test2 = [7,8,9];

let result = test1.concat(test2);
console.log(result); // [ 1, 2, 3, 4, 7, 8, 9 ]


const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


const a = 12;
const b = 24;

const addTotal = a + b;

console.log(addTotal);