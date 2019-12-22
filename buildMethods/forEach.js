//The forEach() method executes a provided function once for each array element.
// function once for each element in an array in ascending order.

// Warning: There is no way to stop or break a forEach() loop other than by throwing an exception. 
// If you need such behavior, the forEach() method is the wrong tool.

const array1 = ['a', 'b', 'c'];

array1.forEach(i => console.log(i));


// expected output: "a"
// expected output: "b"
// expected output: "c"



const arraySparse = [1,3,0,7];
let numCallbackRuns = 0;

arraySparse.forEach(function(element){
  console.log(element);
  numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);

// 1
// 3
// 7
// numCallbackRuns: 3


//  ** Important **
// converting a for loop to for each
const items = ['item1', 'item2', 'item3'];
const copy = [];

// before
for (let i=0; i<items.length; i++) {
  copy.push(items[i]);
}

// after
items.forEach(function(item){
  copy.push(item);
});

console.log(items); // [ 'item1', 'item2', 'item3' ]
console.log(copy); // [ 'item1', 'item2', 'item3', 'item1', 'item2', 'item3' ]


