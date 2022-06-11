// 1,1,2,3,5,8,13,21,34,55, 89

let n = 11;

let a = 0;
let b = 1;
let c = 1;
let sum = 1;
console.log(`fibonacci 1 - hadi 1 ga teng`);

for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(`fibonacci ${i} - hadi ${c} ga teng`);
}