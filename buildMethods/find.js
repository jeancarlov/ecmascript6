// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  function isCherries(fruit) { 
    return fruit.name === 'apples';
  }
  
  console.log(inventory.find(isCherries)); 
  //{ name: 'apples', quantity: 2 }
  // { name: 'cherries', quantity: 5 }