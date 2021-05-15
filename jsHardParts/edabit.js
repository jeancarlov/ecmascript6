
// function hello(x) {
//   if (x === x) {
//     return "hello edabit.com";
//   }
// }

// let result = hello("x");
// console.log(result);

// function Hello() {
//   return "hello edabit.com";
// }

// let result1 = Hello("x");
// console.log(result1);

//-------------------------------

// function howManySeconds(x) {
//   return x * 3600;
// }

// let result = howManySeconds(2);
// console.log(result);


// function howManySeconds2(hours) {
//   const mins = 60;
//   const seconds = 60;
//   return hours * mins * seconds;
// }

// let howManySeconds3 = (h) => h * 3600;

//-------------------------------

// function circuitPower(voltage, current) {
//     return voltage * current;
// }

// let result3 = circuitPower(230,10)
// console.log(result3);

// const circuitPowerArrowFn = (voltage, current) => voltage * current;

//-------------------------------

// function getFirstValue(arr) {
//  return arr[0];
// }


// let result4 =getFirstValue([1, 2, 3]) 
// console.log(result4);

// const getFirstValueArroFn = (arr) => arr[0];

// function remainder(x, y) { 
//     return x % y
// }

// let result6 = remainder(15,7)
// console.log(result6);

//-------------------------------

// function triArea(base, height) {

//     return (base * height) /2 
// }

// let result7 =triArea(3,2)
// console.log(result7);

// function triArea(base, height) {
//   var a = base * height;
//   var b = a / 2;
//   return b;
// }

// const triArea = (base, height) => (base * height) / 2;

//-------------------------------

// function lessThan100(a, b) {
//     let total = a + b;
//     if (total < 100) {
//         return true
//     } else if (total >100) {
//         return false
//     } else return true
// }

// let result8 = lessThan100(3, 77);
// console.log(result8);

// function lessThan100(a, b) {
//   return a + b < 100 ? true : false;
// }

// function lessThan100(a, b) {
//   return a + b < 100;
// }

// let result8 = lessThan100(3, 77);
// console.log(result8);

// -------------------------

// function addition(num) {

//     return ++num;
// }

// let result10 = addition(1)
// console.log(result10);

// const addition = (num) => num + 1;

// -------------------------

// function cube(x) {
//     return x * x * x
// }

// let result11 =cube(5);
// console.log(result11);

// function cubes(a) {
//   return a ** 3;
// }

// let result = cubes(3);

// -------------------------

// function lessThanOrEqualToZero(arg) {
//     let newZero = 0
//   if (arg <= newZero) {
//     return true;
//   } else if (arg > newZero) {
//   } return false;
// }

// function lessThanOrEqualToZeroShortSyntax(a) {
//   let zero = 0;
//   return a <= 0 ? true : false;
// }

// let result12 = lessThanOrEqualToZero(5);
// let result13 = lessThanOrEqualToZero(-2);
// let result14 = lessThanOrEqualToZero(100);
// let result15 = lessThanOrEqualToZero(0);
// console.log(result12);
// console.log(result13);
// console.log(result14);
// console.log(result15);

// -------------------------

//  function calcAge(age) {
//      return age * 365
//  }

//  let result13 = console.log(calcAge(10));

//  const calcAgeArrowFn = (age) => age * 365;

// -------------------------

// function nextEdge(side1, side2) {
//     let total = side1 + side2 - 1;
//     return total
// }

// let result14 = nextEdge(8, 10);
// console.log(result14);

// function animals(chickens, cows, pigs) {
// chlegs= chickens *2
// colegs= cows *4
// pilegs= pigs *4

// let newSum = chlegs + colegs + pilegs;
// return newSum;
// }

// let result15= animals(2, 3, 5);
// console.log(result15);

// function animals2(chickens, cows, pigs) {
//   return chickens * 2 + (cows + pigs) * 4;
// }

// function squared(b) {
//   let total = Math.sqrt(b)
//   return total;
// }
// let result15=squared(5);
// console.log(result15);

// function squared1(b) {
//   return b * b;
// }
// let result16 = squared(5);
// console.log(result16);


// function addition(a, b) {
//     return a + b
// }
// let result17 = addition(3, 2);
// console.log(result17);

// drinks = [
//   { name: "lemonade", price: 50 },
//   { name: "lime", price: 10 },
// ];

// function sortDrinkByPrice(drinks) {
//   const sorted = drinks.sort(function (a, b) {
//     return a.price - b.price;
//   });
//   return sorted;
// }
// function sortDrinkByPriceWithTwoArg(obj1, obj2) {

//     return obj1.price - obj2.price
    
// }

// let result20 = sortDrinkByPrice(drinks);
// console.log(result20);

// function RegexPotatoes(str) {
//  let rx = /potato/g;
// 	return str.match(rx).length;
    
//   }
  
// let result21 = RegexPotatoes("potatopotato");
// console.log(result21);

function SplitPotatoes(str) {
  var arr = str.split("potato");
  return arr.length - 1;
}

let result22 = SplitPotatoes("potatopotato");
console.log(result22);

// -------------------------


// const add= (x,y) => x+y 
// let result22= add(3,4);
// console.log(result22);

// const names = [ 'andrew', 'carlos', 'john']

// let result20 = names[names.length -1];
// console.log(result20);


// const nums = [10,20,40, 50];

// nums[3] = 1000
// console.log(nums);


// const person = {
//   name: "Andrew",
//   age: 27,
// };
// const location = {
//   city: "Philadelphia",
//   country: "USA",
// };
// const overview = {
//   ...person,
//   ...location,
//   name: "Mike",
// };
// console.log(overview);


// function hello(str) {
//   return str.toLowerCase();
// }

// let result23= hello('hello edabit.com')
// // console.log(result23);

// const dropRight = (arr, num = 1) => {
// return arr.reverse().slice(( num)).reverse()
// };

// let result24 = dropRight([1, 2, 3], 2);
// console.log(result24);

let animals = [
  { name: "Tibbers", type: "cat", isNeutered: true, age: 2 },
  { name: "Fluffball", type: "rabbit", isNeutered: false, age: 1 },
  { name: "Strawhat", type: "cat", isNeutered: true, age: 5 },
];

// what you need:
// ['Tibbers', 'Fluffball', 'Strawhat']

// let animalNames = animals.map((animal) => {
//   return animal.name;
// });

// what you need:
// [{name: 'Tibbers', species: 'cat'}, {name: 'Fluffball', species: 'rabbit'}, {name: 'Strawhat', species: 'cat'}]

// let petDetails = animals.map((animal) => {
//   return {
//     name: animal.name,
//     species: animal.type,
//   };
// });

// let result= console.log(petDetails);


// let a = 1
// let b = 2

// console.log(a, b);