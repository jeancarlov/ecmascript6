let a = new Set();

a.add(5);
a.add(43);
a.add('wohoo');
a.add({ x:50, y:200});
console.log(a.has(5));
console.log(a.size);


let num = [1,2,3,4,5];
let numSet = new Set(num);
console.log(numSet);
// now find the set data individually

for (let x of numSet.values()){
    console.log(x);
};


let chars = 'qwertyui';
let chars_arr = chars.split("");
let chars_arr2 = chars.split(" ");
console.log(chars_arr); //[ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i' ]
console.log(chars_arr.length);


for (let i = 0; i < chars_arr.length; i++) {
    const element = chars_arr[i];
    console.log(element);
}
console.log(chars_arr2);// [ 'qwertyui' ]
let chars_set= new Set (chars_arr);
console.log(chars_set); // Set { 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i' }


// challenge

const contains = (word, letter) => {
    let letters = word.split("");
    // TODO create a set with the above 'letters' array
    let letter_set = new Set (letters); 
    // TODO return whether the set has the 'letter'
    return letter_set.has(letter);
  };
  
  let true_check = contains("west", "e");
  console.log(true_check); // true
  
  let false_check = contains("north", "e");
  console.log(false_check); // false 

  
// map

let string1 =  'valderrama'

let letters = new Map();

for (let i = 0; i < string1.length; i++) {
    const letter = string1[i];
    if (!letters.has(letter)) {
        letters.set(letter,1);
    } else{
        letters.set(letter, letters.get(letter)+1);
    }
}
console.log(letters); 
