// join() Joins all array elements into a string using a specified separator
//  join() method creates and returns a new string by concatenating all of the elements in an array 
let sentenceArr = ['c', 'o', 'd', 'e', 'n', 'o', 'w'];
let convertToString = sentenceArr.join( );

console.log(convertToString); // 'c,o,d,e,n,o,w'


const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join(', '));
// expected output: "Fire, Air, Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join(' - '));
// expected output: "Fire - Air -Water"