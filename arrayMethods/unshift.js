//Adds a new element to an array (at the beginning), and "unshifts" older elements. The unshift() method returns the new array length.
// method adds one or more elements to the beginning of an array and returns the new length of the array.

const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]