'use strict';
// es5

function circleArea(r) {
    let pI = 3.14;
    return pI * r * r;
}

let result = circleArea(7);
console.log(result); // 153.86

// es6 arrow functions
// arrow function in practice

let circleArea2 = (x) => {
    const p2 = 3.14;
    return p2 * x * x ;
}

let result2 = circleArea2(7);
console.log(result2); //153.86 this is the same as the function above but it include arrow function



// best example 
let circleArea3 = r => 3.14 * r *r; // no need to put parenthesis when there is only one parameter, and when there is a direct statement 

let result3= circleArea(7);
console.log(result3); // 

