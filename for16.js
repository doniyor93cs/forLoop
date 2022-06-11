// let n = 5;
// let a = 3;

// for (i = 1; i <= n; i++) {
//     console.log(`a ning ${i} darajasi ${Math.pow(a, i)} teng`);
// }

let n = 5;
let a = 3;
let degree = 1;

for (let i = 1; i <= n; i++) {
    degree *= a;
    console.log(`a ning ${i} darajasi ${degree} ga teng`);
}