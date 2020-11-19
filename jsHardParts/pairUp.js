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
//The forEach() method executes a provided function once for each array element.
// function once for each element in an array in ascending order.

// Warning: There is no way to stop or break a forEach() loop other than by throwing an exception. 
// If you need such behavior, the forEach() method is the wrong tool like for loop, every, some, etc.

// Note: forEach is used to executed 
// forEach function expects a function (callback function) as parameter and will implicitly call it for each element in the array.

let array = [1, 2, 3, 4, 5];
function print(val, index) {
  console.log(`array[${index}\] = ${val}`);
}
for (let index = 0, len = array.length; index < len; index++) {
  let val = array[index];
  print(index, val);
}

array.forEach(print);

// use for each for this solution 
// What you have
let officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

let officersIds =  [];
let officersNames =  [];

officers.forEach(function(officer){
    officersIds.push(officer.id);
    officersNames.push(officer.name);
});

console.log(officersIds); //[20, 24, 56, 88]  ok 
console.log(officersNames); //[ 'Captain Piett',etc]//



// see for yourself if your forEach works!


// Challenge 5

// map array method creates a new array with the results of calling a provided function on every element in the calling array.
let coordinates = [
  {
    name: "coordinate_1",
    x: 12,
    y: 123,
  },
  {
    name: "coordinate_2",
    x: 134,
    y: 52,
  },
  {
    name: "coordinate_3",
    x: 34,
    y: 52,
  },
];

let coordinate_names = coordinates.map(coordinate => {
    return coordinate.name;
});
console.log(coordinate_names);

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
