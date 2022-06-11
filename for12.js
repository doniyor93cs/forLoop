let n = 5;
let k = 1.1;
let sum = 1;

for(let i = 0; i < n; i++) {
    sum *= k;
    k += 0.1;
}
console.log(sum.toFixed(1));