
// without recurseive
function factorial(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i }
        return total;
    }


// let result = factorial(3);
// console.log(result);

// with recurseive

function factorialR(num1) {
   if (num1 === 1) return 1;
    return num1 * factorialR(num1-1);
}

// let resultR = factorialR(4);

// console.log(resultR);



// what's the base case ? if (num === 1) return 1; 
// difference input? factorialR(4);
// where is the recurse call ?  return num1 * factorialR(num1-1);



// Design pattern for recursion 


// function collectOddValues(arr) {
//     let result = []

//     function helper(helperInput) {
//         if (helperInput.length === 0) {
//             return;                             
//         }   
//         if (helperInput[0] % 2 !== 0) {
//             result.push(helperInput[0])
//         }
//         helper(helperInput.slice(1))
//     }
//     helper(arr)
//     return result
// }


// let total = collectOddValues([1,2,3,4,5,6])
// console.log(total);
// [ 1, 3, 5 ]



// PURE RECURSION 

function collectOddValuesPR(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !==0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValuesPR(arr.slice(1)));
    return newArr;
}

let newSum = collectOddValuesPR([1,2,3,4,5])
console.log(newSum);
