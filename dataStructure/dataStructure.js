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
}localStorage



