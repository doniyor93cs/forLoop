// 1! + 2! + 3! + ... + n!;

let n = 6;
let k = 1;
let sum = 0;

for (let i = 1; i <= n; i++) {
    k *= i;
    console.log(k);
    sum += k;
}
console.log(`1! dan ${n}! gacha bo'lgan sonlar yig'indisi ${sum} ga teng.`);