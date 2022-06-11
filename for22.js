let n = 20;
let x = 2;
let k = 1;
let sum = 1;
let xDegree = 1;

for (let i = 1; i <= n; i++) {
    k *= i;
    xDegree *= x;
    sum += xDegree/k;
}
console.log(sum.toFixed(5));
