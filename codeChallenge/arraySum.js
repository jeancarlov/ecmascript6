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

// use sort method to set the indexes to descending or  order 
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




