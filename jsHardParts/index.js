
const num = 3;

function multiplyBy2(num) {
    
    const result = num * 2;
    return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10)

console.log(output)
console.log(newOutput)

// why do we even have functions? to make it reusable

// create a function squared
// take no input
// return 10*10 

// whats the problem with the function above? it not reusable 

// solution


function squareNum(num) {
    let total = num * num;
    console.log(total);
    return total;
}

let result1 = squareNum(10); 
console.log(result1);
squareNum(9); //81
squareNum(4); // 16
//console.log(squareNum);

function circleArea(r) {
    let pI = 3.14;
    return pI * r * r;
}

let result = circleArea(7);
console.log(result)

// this function is fine but how can we improve it ? using HOF 
function copyArrayAndAdd3(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i]/2)
    }
    return output;
}

const myArray = [1,2,3];

const result3 = copyArrayAndAdd3(myArray)
console.log(result3);

// HOF improvement