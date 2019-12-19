// spice() Adds/removes new items to an array.

// The first parameter defines the position where new elements should be added (spliced in).

// The second parameter defines how many elements should be removed.

//The rest of the parameters define the new elements to be added.


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]