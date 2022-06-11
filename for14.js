let n = 5;
let k = 0;
for (let i = 1; i <= (2*n - 1); i += 2) {
    console.log((k + i)**2);
    k += i;
}