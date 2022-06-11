let n = 3;
let s = 0;

for (let i = 0; i <= n; i++) {
    s += Math.pow(n + i, 2);
}
console.log(s);