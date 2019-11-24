'use strict';

function addN(x,y,z) {
    return x, y, z;
    
}

console.log(addN(1,2,3));


let addN2 = (a,b,c) => {
    return  a + b + c;

}
console.log(addN2(5,6,7));


// es6 spreadOperator

let fruits = ['apples', 'orange', 'pineapples'];
let grains = ['rice','beans'];

let total = ['apples', ... grains]
console.log(total); // [ 'apples', 'rice', 'beans' ]

