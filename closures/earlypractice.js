// 11/29/19

let num = [1,2,3,4,5];

let num2 = [];

for (let i = 0; i < num.length; i++) {
    const total = num[i];
    console.log(total);
    if (total === num[i]) {
        num2.push(total*3)
    }
}
console.log(num2);


let animals = ['cats', 'dogs','fish'];
let sum = []

let newSection = (x) => sum.push(`hello this is the new section for animals ${animals}`);

newSection(true);
console.log(sum);
