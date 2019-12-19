// should loop all the array add the the index and  the sum should equal the heights number

function arraySum1(arr){
    
    return arr;
}
function arraySum2(arr1){
    return arr1;
}


//console.log(ArraySum([1,2,3,4,6,13])); 
// returns true 1+2+4+6= 13 

//console.log(ArraySum2([1,2,4,34,22]));

////------------------solution-----------------

// use sort method to set the indexes to descending or ascendig  order 
function arraySum3(arr){
    let tempArr = arr.sort((a, b) =>{
        return a - b; 
    });
      // get the largest # by using pop
    let largest = tempArr.pop();
    // use reduce, foreach, map to sum all the numbers in the index
    let number = 0;
    tempArr.forEach(item => (number += item)); 
    return largest === number;
    
}


console.log(arraySum3([1, 2, 4, 6, 13])); 
// returns true 1+2+4+6= 13 
console.log(arraySum3([1,2,4,34,22])); // returns false 



const months = ['March', 'Jan', 'Feb', 'Dec'];
let tempMonths = months.sort((a, b) =>{
    return b - a; 
});
console.log(tempMonths);


// Converting a for loop to for each
const items = ['item1', 'item2', 'item3'];
const copy = [];

// before
// after
items.forEach(function(item){
  copy.push(item);
});

  // after
items.forEach(function(item){
    copy.push(item);
  });

  console.log(copy);
  