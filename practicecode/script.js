// let driverLincence = (passTest) => {
//     if(true) {
//         let result = 1;
//     }
//  console.log(result);
 
// }

// driverLincence(true);
// console.log(driverLincence);




     // ES6

let x = 3;
// console.log(x);

function func(randomize) {
    if (randomize) {
        let x = Math.random();
        return x;
    }
    return x;

    console.log(x);
    
}
let result =func(false); // 3
let result2 =func(true); // 3

console.log(result);
console.log(result2);


//  IIFE (Immediately-Invoked Function Expression)  ES6
// if you wanted to restrict the scope of a variable tmp to a block

{  // open block
    let tmp = 3;

}  // close block

// ReferenceError  console.log(tmp); 



const [, year, month, day] =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');

    console.log(year);
    
    console.log(month);
    
    console.log(day);
    
