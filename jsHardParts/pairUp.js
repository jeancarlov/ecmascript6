// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// Challenge 1
// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));
function addTwo(num) {
  let total1 = num + 2;
  return total1;
}
let result1 = addTwo(4);
console.log(result1); // 6 ok 

// plus challenge add to arguments
function addTwoArg(x,y) {
    let total = x + y ;
    return total
}
 let result = (addTwoArg(2,3))
 console.log(result); // 5

// Challenge 2
function addS(word) {
    let sumWord = word + "s";
    return sumWord
}

let phrase = addS("car");
console.log(phrase); // cars   ok

addS("pizza");
addS("bagel");
console.log(addS('pizza')); // ok
console.log(addS('bagel')); // ok


// Challenge 3 With Higher Order Functions

function mapArray(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray
    console.log(newArray);
}

function addTwo(num) {
    return num + 2 ;
}

const result3 = mapArray([1,2,3], addTwo)
console.log(result3);
console.log(mapArray([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {}

// see for yourself if your forEach works!

// Challenge 5
function mapWith(array, callback) {}

// Challenge 6
function reduce(array, callback, initialValue) {}

// Challenge 7
function intersection(arrays) {}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

// Challenge 8
function union(arrays) {}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
