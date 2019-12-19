
let simpleArraySum = () => {
    let ar = ('1', '2', '3');
    console.log(ar);
    
   for (let i = 0; i < ar.length; i++) {
       const element = ar[i].split(' ');
       console.log(element);
       let totalSum = ar[i].split(' ')
       console.log(totalSum);
       
       
   }
}

let result = simpleArraySum();
console.log(result);
