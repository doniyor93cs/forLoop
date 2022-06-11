// e = 2.71828

let n = 20;
let k = 1;
let sum = 1;

for (let i = 1; i <= n; i++) {
    k *= i;
    sum += 1/k;
}
console.log(sum.toFixed(5));