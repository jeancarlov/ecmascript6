function sumValues() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
         sum += arguments[i];
        
    }
    return sum;
}

var result1 = sumValues(3,5,6,2,7);
var result2 = sumValues(12,20);

console.log(result1);
console.log(result2);

// ES6

function sumValues2() {
    let sum1 = 0;
    for (let i = 0; i < arguments.length; i++) {
         sum1 += arguments[i];
        
    }
    return sum1
}

let result3 = sumValues2(1,2,4,5,6)
let result4 = sumValues2(10,20)

console.log(result3); //18
console.log(result4); // 30


function sumValues3 ()