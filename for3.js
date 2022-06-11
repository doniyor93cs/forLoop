let a = 1;
let b = 9;

let sum = 0;

for (let i = b - 1; i > a; i--) {
    console.log(i);
    sum += 1;
}
console.log(`sum = ${sum}`);