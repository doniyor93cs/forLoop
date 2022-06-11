// let n = 5;
// let a = 3;
// let sum = 0;

// for (i = 1; i <= n; i++) {
//     console.log(`a ning ${i} darajasi ${Math.pow(a, i)} teng`);
//     sum += Math.pow(a, i);
// }
// console.log(`yigindi - ${sum} ga teng`);

let n = 5;
let a = 3;
let degree = 1;
let sum = 0;

for (let i = 1; i <= n; i++) {
    degree *= a;
    console.log(`a ning ${i} darajasi ${degree} ga teng`);
    sum += degree;
}
console.log(`Darajalar yigindisi ${sum} ga teng`);
