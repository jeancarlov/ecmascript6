
// With Recursion  #1
function countDown(num) {
    if (num <= 0) {
        console.log('All done! with recursion ');
        return;
    }
    console.log(num);
    num--;
    countDown(num)
    
 }

// countDown(5)

 // Without Recursion 

 function countDown1(num1) {
     for (let i = num1; i > 0; i--){
       console.log(i);
     }
     console.log('all done with out recursion ');
    }

// countDown1(10);

// With Recursion  #2

function sumRange(num) {
    if (num === 1) return 1; 
        return  num + sumRange (num-1);
    }


let result = sumRange(3);
console.log(result);

// what's the base case ? if (num === 1) return 1; 
// difference input? let result = sumRange(10);
// where is the recurse call ? return  num + sumRange (num-1);
