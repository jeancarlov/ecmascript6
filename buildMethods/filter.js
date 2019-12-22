//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present' , 'mia'];

const result = words.filter(word => word.length < 6);

console.log(result);// [ 'spray', 'limit', 'elite', 'mia' ]


// expected output: Array ["exuberant", "destruction", "present"]


function isBigEnough(value) {
    return value >= 10;
  }
  
  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  console.log(filtered);
  
  // filtered is [12, 130, 44]