//The fill() method fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value.
// It returns the modified array.

const newN = [1,2,3,4,5,6];

let result  = newN.fill(0,2,4)

// fill with 0 from position 2 to 4 
console.log(result);//[ 1, 2, 0, 0, 5, 6 ] 


// fill with 5 from position 1
console.log(result.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(result.fill(6));
// expected output: [6, 6, 6, 6]
