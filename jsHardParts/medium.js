
//  function howManySeconds2(hours) {
//   const mins = 60;
//   const seconds = 60;
//   return hours * mins * seconds;
// }


// function convert(hours, minutes) {
//     let hoursConvert = hours *3600
//     let minutesConvert = minutes *60
//     return hoursConvert + minutesConvert
// }

// let result1= convert(1,3)
// console.log(result1);
//---------------------------------
// function and(a, b) {
//   if (a && b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let result2 = and(11, 11);
// console.log(result2);

// function and1(a, b) {

//     if ( a >=10 && b <= 10) {
//         return false
//     } if (a >= 10 && b >= 10) {
//         return true
//     }if (a <= 10 && b <= 10) {
//         return false
//     }
// }

// function and(a, b) {
//   let bool = a === b && b != false ? true : false;
//   return bool;
// }
//---------------------------------
// function findPerimeter(length, width) {
//     let firstSide= length *2;
//     let secondSide= width *2;
//     return firstSide + secondSide;
// }

// let result2 = findPerimeter(6,7)
// console.log(result2);

// function findPerimeter2(length, width) {
//   return (length + width) * 2;
// }

// const findPerimeter = (h, w) => (w + h) * 2;
//---------------------------------
// function maxNum(n1, n2) {
//   if (n1 < n2) {
//     return n2;
//   } else {
//     return n1;
//   }
// }

// let result3 = maxNum(5, 7);
// console.log(result3);

// const maxNum = (n1, n2) => (n1 < n2 ? n2 : n1);

//---------------------------------
// function giveMeSomething(a) {
//     let newPhrase= `something ${a}`;
//     return newPhrase
// }

// let result4 = giveMeSomething("is better than nothing");
// console.log(result4);

// const giveMeSomethingArrowFn = (a) => `something ${a}`;

//---------------------------------
// function matchHouses(step) {
// if (step) {
// 		return (step * 5) + 1;
// 	}
// 	return 0;
// }


// function binary(decimal) {
//   let result = "";
//   if (decimal == 0) {
//     result = "0";
//   }
//   while (decimal > 0) {
//     result += decimal % 2;
//     decimal = Math.floor(decimal / 2);
//   }
//   return result.split("").reverse().join("");
// }


// function binary(decimal) {
//   return decimal.toString(2);
// }
// let result5 =binary(5)
// console.log(result5);

//-------------


// function minMax(arr) {
//   var returnArr = [];
//   var min = arr[0];
//   var max = arr[0];

//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   returnArr.push(min);
//   returnArr.push(max);

//   return returnArr;
// }

// let resultMinMAx= minMax([1, 2, 3, 4, 5]);
// console.log(resultMinMAx);

// function minMaxBetter(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }
// let resultMinMAxBetter = minMax([2334454, 5]);
// console.log(resultMinMAxBetter);

// const minMaxArrowFn = (arr) => [Math.min(...arr), Math.max(...arr)];

// function whichIsLarger1(f, g) {
//   if (f() < g()) return "g";
//   else if (f() > g()) return "f";
//   else return "neither";
// }

// function whichIsLarger2(f, g) {
//   return f() > g() ? "f" : f() < g() ? "g" : "neither";
// }

//-------------
function addUp(num) {
let array = [];
for (let i = 0; i <= num; i++) {
  array.push(i);
}
return array.reduce((a, b) => a + b);
}

let result6 = addUp(4);
console.log(result6);