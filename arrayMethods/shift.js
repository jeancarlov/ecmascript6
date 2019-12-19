//Removes the first element of an array, and "shifts" all other elements one place down. 
//The shift() method returns the string that was "shifted out".

//Using shift() method in while loop
//The shift() method is often used in condition inside while loop. In the following example every iteration will remove the next element from an array, until it is empty:

let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

let shifted = myFish.shift(); 

console.log('myFish after:', myFish); 
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted); 
// Removed this element: angel